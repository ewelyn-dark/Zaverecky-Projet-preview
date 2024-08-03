### README - Přehled projektu

# Aplikace pojistných událostí naleznete na doméňe [https://zaverecnyprojektitnetwork-ewelyn-darks-projects.vercel.app/](https://zaverecnyprojektitnetwork-git-main-ewelyn-darks-projects.vercel.app/)

## Přehled

Tento projekt je jednoduchá webová aplikace, která umožňuje správu informací o pojištěncích. Aplikace umožňuje uživatelům zobrazit profil pojištěného, přidávat nové pojištěnce do seznamu a prohlížet si seznam všech pojištěných osob. Data jsou uložena v `localStorage`, což umožňuje uchovat data i po zavření prohlížeče.

## Struktura souborů

- **index.html**: Hlavní HTML soubor, který obsahuje strukturu aplikace.
- **style.css**: CSS soubor, který obsahuje styly pro vzhled aplikace.
- **app.js**: Hlavní JavaScriptový soubor, který obsahuje logiku aplikace a interakci s DOM.
- **insured.js**: JavaScriptový soubor obsahující třídu `Insured`, která reprezentuje jednotlivé pojištěnce.
- **footerYear.js**: JavaScriptový soubor, který nastavuje aktuální rok v patičce stránky.
- **logo1.png**: Obrázek loga, který je zobrazen v navigačním panelu.
- **1000000528.jpeg**: Profilová fotografie, která je zobrazena v sekci "Profil pojištěného".
- **d8d78.ico**: Favicon pro stránku.

## Funkcionalita

### Navigace

Aplikace obsahuje navigační panel, který umožňuje přepínání mezi třemi hlavními sekcemi:
- **Profil pojištěného**: Zobrazuje profil pojištěného.
- **Seznam pojištěných**: Zobrazuje seznam všech pojištěných osob.
- **Přidat pojištěného**: Formulář pro přidání nového pojištěného.

### Přidání nového pojištěného

V sekci "Přidat pojištěného" je formulář, který uživatelům umožňuje zadat informace o novém pojištěnci, jako jsou:
- Jméno
- Příjmení
- Věk
- Telefonní číslo

Po odeslání formuláře je nový pojištěnec přidán do seznamu pojištěných osob a uložen do `localStorage`.

### Seznam pojištěných

Tato sekce zobrazuje seznam všech pojištěných osob. Každá položka v seznamu obsahuje tlačítko, které umožňuje zobrazit nebo skrýt detaily pojištěného (věk a telefonní číslo).

### Ukládání a načítání dat

Aplikace používá `localStorage` k ukládání seznamu pojištěných osob. Pokud aplikace najde uložená data v `localStorage`, automaticky je načte a zobrazí v seznamu pojištěných.

### Patička stránky

Patička obsahuje aktuální rok, který je dynamicky generován pomocí `footerYear.js`.

## Použití

1. **Stáhněte** si projekt do vašeho počítače.
2. **Otevřete** soubor `index.html` v prohlížeči.
3. Použijte navigační tlačítka k přepínání mezi různými sekcemi aplikace.
4. Přidejte nové pojištěnce pomocí formuláře v sekci "Přidat pojištěného".
5. Zobrazte seznam pojištěnců v sekci "Seznam pojištěných".

## Závislosti

Tento projekt je nezávislý na externích knihovnách a je plně funkční s moderními prohlížeči podporujícími HTML5, CSS3 a JavaScript ES6.

## Autor

Tento projekt byl vytvořen jako součást finálního projektu pro IT Network. Autorem je Evelyn Kurincová, a veškerá práva jsou vyhrazena.
