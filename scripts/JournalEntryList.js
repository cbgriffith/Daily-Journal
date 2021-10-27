import { JournalEntryComponent } from "./JournalEntry.js"
import { getJournalEntries, useJournalEntries } from "./JournalDataProvider.js";

const contentTarget = document.querySelector("#entryLog")

// document.querySelector("#notes-nav-link").addEventListener("click", function(){
//     NoteList();        
//   });

export const JournalEntryList = () => {
    getJournalEntries()
    .then(() => {

            let journalArray = useJournalEntries();

            let journalHTML = "<br><h2>Entries</h2>";

            journalArray.forEach(singleJournalObj => {

                journalHTML += JournalEntryComponent(singleJournalObj);
            });

            contentTarget.innerHTML = journalHTML
        });
};
