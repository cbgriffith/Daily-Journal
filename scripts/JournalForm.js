import { EntryListComponent } from "./JournalEntryList.js"
// import { saveJournal } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journal-form-container")

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveJournal") {


      const newNote = {
         date: document.querySelector('#journal__Date').value,
         concept: document.querySelector('#journal__Concepts').value,
         entry: document.querySelector('#journal__Entry').value,
         mood: document.querySelector('#journal__Mood').value
      }
      document.querySelector('#journal__Date').value = ""
      document.querySelector('#journal__Concepts').value = ""
      document.querySelector('#journal__Entry').value = ""
      document.querySelector('#journal__Mood').value = ""

      saveNote(newNote)
      .then(EntryListComponent)
  }
})

export const JournalForm = () => {
    contentTarget.innerHTML = `<form>
    <fieldset>
        <label for="journalDate">Date of Entry</label>
        <input class="form-control" type="date" name="journalDate" id="journal__Date">
        <label for="conceptsCovered">Concepts Covered</label>
        <input class="form-control" type="text" name="conceptsCovered" id="journal__Concepts">
        <div class="mb-3">
            <label for="journalEntry" class="form-label">Journal Entry</label>
            <textarea class="form-control" id="journal__Entry" rows="3"></textarea>
          </div>
            <label for="currentMood">Mood for the Day</label>
            <select class="form-select" aria-label="Default select example" id="journal__Mood">
                <option selected>Happy</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
                <option value="confused">Confused</option>
                <option value="exhausted">Exhausted</option>
                <option value="indifferent">Indifferent</option>
              </select>
        <button id="saveJournal" class="btn btn-primary">Save Entry</button>
    </fieldset>
</form>`
}