const foodSourcesData = {
    labels: ['Perishable', 'Non-Perishable', 'Meals'],
    datasets: [{
        label: 'Food Quantity (kg)',
        data: [500, 800, 575],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};

const beneficiariesData = {
    labels: ['Group 1', 'Group 2', 'Group 3'],
    datasets: [{
        label: 'Items Received',
        data: [100, 150, 200],
        backgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384'],
        hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384']
    }]
};

const volunteersData = {
    labels: ['John Doe', 'Jane Smith', 'Michael Tan'],
    datasets: [{
        label: 'Hours Contributed',
        data: [40, 35, 45],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};

const efficiencyData = {
    labels: ['Wastage', 'Requests Fulfilled', 'Issues Encountered'],
    datasets: [{
        label: 'Efficiency Metrics',
        data: [2, 98, 5],
        backgroundColor: ['#36A2EB', '#4BC0C0', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#4BC0C0', '#FFCE56']
    }]
};

let foodSourcesChart, beneficiariesChart, volunteersChart, efficiencyChart;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    switch (sectionId) {
        case 'food-sources':
            if (!foodSourcesChart) {
                foodSourcesChart = new Chart(document.getElementById('foodSourcesChart'), {
                    type: 'doughnut',
                    data: foodSourcesData
                });
            }
            break;
        case 'beneficiaries':
            if (!beneficiariesChart) {
                beneficiariesChart = new Chart(document.getElementById('beneficiariesChart'), {
                    type: 'bar',
                    data: beneficiariesData,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
            break;
        case 'volunteers':
            if (!volunteersChart) {
                volunteersChart = new Chart(document.getElementById('volunteersChart'), {
                    type: 'pie',
                    data: volunteersData
                });
            }
            break;
        case 'efficiency':
            if (!efficiencyChart) {
                efficiencyChart = new Chart(document.getElementById('efficiencyChart'), {
                    type: 'doughnut',
                    data: efficiencyData
                });
            }
            break;
    }
}


function initializeOverviewCharts() {
    new Chart(document.getElementById('foodSourcesOverviewChart'), {
        type: 'doughnut',
        data: foodSourcesData
    });

    new Chart(document.getElementById('beneficiariesOverviewChart'), {
        type: 'bar',
        data: beneficiariesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(document.getElementById('volunteersOverviewChart'), {
        type: 'pie',
        data: volunteersData
    });

    new Chart(document.getElementById('efficiencyOverviewChart'), {
        type: 'doughnut',
        data: efficiencyData
    });


    const overviewLeaderboard = document.getElementById('overviewLeaderboard');
    const leaderboardData = [
        'John Doe - 100 points',
        'Jane Smith - 95 points',
        'Michael Tan - 90 points',
    ];

    leaderboardData.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        overviewLeaderboard.appendChild(li);
    });
}



initializeOverviewCharts();

showSection('overview');
