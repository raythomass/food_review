// Exporting a function for formatting a date
module.exports = {
    format_date: (date) => {
        return date.ToLocaleString(date);
    }
};