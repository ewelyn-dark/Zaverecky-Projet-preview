document.addEventListener('DOMContentLoaded', () => {
    /**
     * Inicializace proměnných pro tlačítka a sekce na stránce.
     * profileBtn, listBtn, addBtn - tlačítka pro navigaci mezi sekcemi.
     * profileSection, addInsuredSection, insuredListContainer - sekce stránky, které budou přepínány.
     * insuredForm, insuredList - formulář a seznam pojištěných.
     * insuredCollection - pole pro uložení pojištěných osob.
     */
    const profileBtn = document.getElementById('profileBtn');
    const listBtn = document.getElementById('listBtn');
    const addBtn = document.getElementById('addBtn');
    const profileSection = document.getElementById('profile');
    const addInsuredSection = document.getElementById('addInsured');
    const insuredListContainer = document.getElementById('insuredListContainer');
    const insuredForm = document.getElementById('insuredForm');
    const insuredList = document.getElementById('insuredList');
    let insuredCollection = [];

    /**
     * Funkce pro zobrazení vybrané sekce a skrytí ostatních.
     * @param {HTMLElement} section - sekce, která má být zobrazena.
     */
    const showSection = (section) => {
        profileSection.style.display = 'none';
        addInsuredSection.style.display = 'none';
        insuredListContainer.style.display = 'none';
        section.style.display = 'flex';
    };

    /**
     * Události pro tlačítka navigace mezi sekcemi.
     * Kliknutí na tlačítko zobrazí příslušnou sekci.
     */
    profileBtn.addEventListener('click', () => showSection(profileSection));
    listBtn.addEventListener('click', () => showSection(insuredListContainer));
    addBtn.addEventListener('click', () => showSection(addInsuredSection));

    /**
     * Funkce pro přidání pojištěného do seznamu na stránce.
     * @param {Object} insured - objekt pojištěného.
     */
    const addInsuredToList = (insured) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = `${insured.firstName} ${insured.lastName}`;
        button.classList.add('insured-button');
        button.addEventListener('click', () => {
            const details = li.querySelector('.details');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });

        const div = document.createElement('div');
        div.classList.add('details');
        div.style.display = 'none';
        div.innerHTML = `
            <p><strong>Věk:</strong> ${insured.age}</p>
            <p><strong>Telefon:</strong> ${insured.phone}</p>
        `;

        li.appendChild(button);
        li.appendChild(div);
        insuredList.appendChild(li);
    };

    /**
     * Funkce pro vytvoření nového pojištěného.
     * @param {string} firstName - křestní jméno pojištěného.
     * @param {string} lastName - příjmení pojištěného.
     * @param {number} age - věk pojištěného.
     * @param {string} phone - telefonní číslo pojištěného.
     * @returns {Object} - nový objekt pojištěného.
     */
    const createInsured = (firstName, lastName, age, phone) => {
        return new Insured(firstName, lastName, age, phone);
    };

    /**
     * Funkce pro načtení seznamu pojištěných z localStorage.
     * Načítá uložené pojištěné a přidává je do seznamu na stránce.
     */
    const loadInsuredFromLocalStorage = () => {
        const storedInsured = localStorage.getItem('insuredCollection');
        if (storedInsured) {
            insuredCollection = JSON.parse(storedInsured);
            insuredCollection.forEach(insured => addInsuredToList(new Insured(insured.firstName, insured.lastName, insured.age, insured.phone)));
        }
    };

    /**
     * Funkce pro uložení seznamu pojištěných do localStorage.
     * Ukládá aktuální seznam pojištěných do localStorage.
     */
    const saveInsuredToLocalStorage = () => {
        const saveInsured = (insuredCollection) => {
            localStorage.setItem('insuredCollection', JSON.stringify(insuredCollection));
        };

        saveInsured(insuredCollection);
    };

    /**
     * Událost pro odeslání formuláře a přidání nového pojištěného do seznamu.
     * Při odeslání formuláře se nový pojištěný přidá do seznamu a uloží do localStorage.
     */
    insuredForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;

        const insured = createInsured(firstName, lastName, age, phone);
        insuredCollection.push(insured);
        addInsuredToList(insured);
        saveInsuredToLocalStorage();

        insuredForm.reset();
    });

    /**
     * Předdefinovaný seznam pojištěných, který se načte při prvním spuštění, pokud není uložený seznam v localStorage.
     * Tento seznam se použije pouze jednou, při prvním načtení stránky, pokud ještě neexistují uložená data.
     */
    const predefinedInsureds = [
        createInsured("Eva", "Kurincová", 59, "774 859 372"),
        createInsured("Róbert", "Kurinec", 59, "605 473 872"),
        createInsured("Filoména", "Kurincová", 82, "504 732 856"),
        createInsured("Evelyn", "Kurincová", 32, "607 473 764")
    ];

    /**
     * Kontrola, zda existují uložené pojištěné v localStorage.
     * Pokud nejsou nalezeny žádné údaje, načtou se předdefinovaní pojištění a uloží se do localStorage.
     */
    if (!localStorage.getItem('insuredCollection')) {
        predefinedInsureds.forEach(insured => {
            insuredCollection.push(insured);
            addInsuredToList(insured);
        });
        saveInsuredToLocalStorage();
    } else {
        loadInsuredFromLocalStorage();
    }

    // Výchozí zobrazení sekce "Profil pojištěného" při načtení stránky.
    showSection(profileSection);
});
