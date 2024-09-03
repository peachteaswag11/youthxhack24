const mysql = require('mysql2');
const express = require('express');
const app = express();

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000, // Default MySQL port
  user: 'root',
  password: 'Zxcv1234!?@#',
  database: 'Food_traffic_data'
});

app.use(express.json());

app.get('/api/data', (req, res) => {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  
    // Query the Requestor table for requestor ID 41
    connection.query('SELECT * FROM Requestor_Table WHERE id = ?', [101], (err, requestorRows) => {
      if (err) {
        console.error('Error querying Requestor table:', err);
        connection.end(); // Ensure connection is closed on error
        return;
      }
  
      if (requestorRows.length === 0) {
        console.error('Requestor ID 101 not found');
        connection.end();
        return;
      }
  
      const requestorRow = requestorRows[0];
      console.log(`Requestor 41 Data: ${JSON.stringify(requestorRow)}`);
  
      // Query the Giver table for giver ID 47
      connection.query('SELECT * FROM Giver_Table WHERE id = ?', [107], (err, giverRows) => {
        if (err) {
          console.error('Error querying Giver table:', err);
          connection.end(); // Ensure connection is closed on error
          return;
        }
  
        if (giverRows.length === 0) {
          console.error('Giver ID 107 not found');
          connection.end();
          return;
        }
  
        const giverRow = giverRows[0];
        console.log(`Giver 107 Data: ${JSON.stringify(giverRow)}`);
  
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
  
          // Display details from the giver that matched
          const matchedAttributes = Object.keys(requestorRow).filter(key => key !== 'id' && key !== 'Request_Date' && key !== 'timestamp' && key !== 'Location_district' && requestorRow[key] === giverRow[key]);
  
          res.json(matchedAttributes);

          console.log(`Giver ID: ${giverRow.id}`);
          console.log(`Location District: ${giverRow.Location_district}`);
          console.log(`Food Description: Grilled chicken, Steamed broccoli`);
  
          console.log(`Matched Food Attributes:`);
          matchedAttributes.forEach(attr => {
            console.log(`${attr.replace(/_/g, ' ')}: ${giverRow[attr]}`);
          });
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
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
