let journal = [];

// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }
export const useJournalEntries = () => {
    return journal.slice();
}

export const getJournalEntries = () => {
    return fetch('http://localhost:8088/entries')
        .then(response => response.json())
        .then(parsedJournalEntries => {
            journal = parsedJournalEntries;
        });

}

export const saveJournal = newJournalEntry => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
    .then(getJournalEntries)
}
