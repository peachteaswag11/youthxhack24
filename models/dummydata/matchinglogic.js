const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000, // Default MySQL port
  user: 'root',
  password: 'Zxcv1234!?@#',
  database: 'Food_traffic_data'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');

  // Query the Requestor table for requestor ID 41
  connection.query('SELECT * FROM Requestor_Table WHERE id = ?', [41], (err, requestorRows) => {
    if (err) {
      console.error('Error querying Requestor table:', err);
      connection.end(); // Ensure connection is closed on error
      return;
    }

    if (requestorRows.length === 0) {
      console.error('Requestor ID 41 not found');
      connection.end();
      return;
    }

    const requestorRow = requestorRows[0];
    console.log(`Requestor 41 Data: ${JSON.stringify(requestorRow)}`);

    // Query the Giver table for giver ID 47
    connection.query('SELECT * FROM Giver_Table WHERE id = ?', [47], (err, giverRows) => {
      if (err) {
        console.error('Error querying Giver table:', err);
        connection.end(); // Ensure connection is closed on error
        return;
      }

      if (giverRows.length === 0) {
        console.error('Giver ID 47 not found');
        connection.end();
        return;
      }

      const giverRow = giverRows[0];
      console.log(`Giver 47 Data: ${JSON.stringify(giverRow)}`);

      // Match the attributes and location district
      const isMatch = (
        requestorRow.Gluten_Free === giverRow.Gluten_Free &&
        requestorRow.Lactose_Free === giverRow.Lactose_Free &&
        requestorRow.Low_Sodium === giverRow.Low_Sodium &&
        requestorRow.Diabetic_friendly === giverRow.Diabetic_friendly &&
        requestorRow.Nut_Free === giverRow.Nut_Free &&
        requestorRow.Soy_Free === giverRow.Soy_Free &&
        requestorRow.Halal === giverRow.Halal &&
        requestorRow.Vegan === giverRow.Vegan &&
        requestorRow.Vegetarian === giverRow.Vegetarian &&
        requestorRow.Seafood === giverRow.Seafood &&
        requestorRow.Beef_Free === giverRow.Beef_Free &&
        requestorRow.Location_district === giverRow.Location_district
      );

      if (isMatch) {
        console.log('Match Found!');
        console.log(`Requestor ID: ${requestorRow.id}`);
        console.log(`Giver ID: ${giverRow.id}`);

        // Display details from the giver that matched
        const requestDate = new Date(requestorRow.timestamp).toISOString().split('T')[0];
        const giverExpiryDate = new Date(giverRow.expiry).toISOString().split('T')[0];

        console.log(`Giver Details:`);
        console.log(`Date: ${giverExpiryDate}`);
        console.log(`Time: ${giverRow.expiry}`);
        console.log(`Location District: ${giverRow.Location_district}`);
        console.log(`Food Attributes:`);
        console.log(`Gluten Free: ${giverRow.Gluten_Free}`);
        console.log(`Lactose Free: ${giverRow.Lactose_Free}`);
        console.log(`Low Sodium: ${giverRow.Low_Sodium}`);
        console.log(`Diabetic Friendly: ${giverRow.Diabetic_friendly}`);
        console.log(`Nut Free: ${giverRow.Nut_Free}`);
        console.log(`Soy Free: ${giverRow.Soy_Free}`);
        console.log(`Halal: ${giverRow.Halal}`);
        console.log(`Vegan: ${giverRow.Vegan}`);
        console.log(`Vegetarian: ${giverRow.Vegetarian}`);
        console.log(`Seafood: ${giverRow.Seafood}`);
        console.log(`Beef Free: ${giverRow.Beef_Free}`);
      } else {
        console.log('No Match Found.');
      }

      // Close the connection after the queries
      connection.end((err) => {
        if (err) {
          console.error('Error closing the connection:', err);
        } else {
          console.log('Connection closed.');
        }
      });
    });
  });
});
