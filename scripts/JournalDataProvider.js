/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/14/2021",
        concept: "HTML, CSS, & JavaScript",
        entry: "Learned how to use the forEach() in javascript.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "10/15/2021",
        concept: "HTML CSS and JavaScript",
        entry: "Learned how to automate HTML through javascript",
        mood: "Exhausted"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
