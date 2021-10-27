export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>Date: ${entry.date}</p>
            <p>Concepts Covered: ${entry.concept}</p>
            <p>Journal Entry: ${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
            <hr>
        </section>
    `
}


export const JournalEntry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journal__Card">
            <p class="journal__Date">${new Date(entry.date).toLocaleDateString('en-US')}</p>
            <p class="journal__Concepts">Concepts Covered: ${entry.concept}</p>
            <p class="journal__Entry">Journal Entry: ${entry.entry}</p>
            <p class="journal__Mood">Mood: ${entry.mood}</p>
        </section>`
}
