export const JournalEntryComponent = (entry) => {
    return `<hr>
        <section id="entry--${entry.id}" class="journal__Card">
            <p class="journal__Date">${new Date(entry.date).toLocaleDateString('en-US')}</p>
            <p class="journal__Concepts">Concepts Covered: ${entry.concept}</p>
            <p class="journal__Entry">Journal Entry: ${entry.entry}</p>
            <p class="journal__Mood">Mood: ${entry.mood}</p>
        </section>`
}