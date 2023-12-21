// Add this code to your app.js

// Function to fetch unique values for dropdowns from the database
async function fetchUniqueValues() {
    try {
        const uniqueNames = await Athlete.distinct('name');
        const uniqueSportCategories = await Athlete.distinct('sportCategory');
        const uniqueGenders = await Athlete.distinct('gender');

        return { uniqueNames, uniqueSportCategories, uniqueGenders };
    } catch (error) {
        console.error('Error fetching unique values for dropdowns:', error);
        throw error;
    }
}

// Function to populate dropdown options
async function populateDropdowns() {
    try {
        const { uniqueNames, uniqueSportCategories, uniqueGenders } = await fetchUniqueValues();

        // Populate dropdowns
        populateDropdown('athleteNameDropdown', uniqueNames);
        populateDropdown('sportCategoryDropdown', uniqueSportCategories);
        populateDropdown('genderDropdown', uniqueGenders);
    } catch (error) {
        console.error('Error populating dropdowns:', error);
    }
}

// Function to populate a dropdown with options
function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);

    // Clear existing options
    dropdown.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Select';
    defaultOption.value = '';
    dropdown.add(defaultOption);

    // Add options from the array
    options.forEach((option) => {
        const newOption = document.createElement('option');
        newOption.text = option;
        newOption.value = option;
        dropdown.add(newOption);
    });
}

// Call the function to populate dropdowns
populateDropdowns();
