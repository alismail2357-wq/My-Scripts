// Function to check if the time is within 2 minutes of now
function checkTime2Minutes(timingString) {
  // Format expected: 'DD-MM-YYYY HH:mm'
  const parts = timingString.trim().split(' ');
  if (parts.length !== 2) return false;

  const [datePart, timePart] = parts;
  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  // Create a JS Date object (month is 0-indexed)
  const inputDate = new Date(year, month - 1, day, hours, minutes);

  if (isNaN(inputDate.getTime())) return false;

  const now = new Date();
  const diffMs = Math.abs(now - inputDate);
  const diffMinutes = diffMs / 1000 / 60;

  return diffMinutes <= 2;
}



//Checking all Boxes First

let myCollector = ()=> {
  const taskList = document.getElementsByClassName("ui-widget-content jqgrow ui-row-ltr")
  for (task of taskList){
    let timingString=task.children[13].innerText
    if(checkTime2Minutes(timingString)==true) {
         task.children[0].click()
      }
    
    }      
    
    //Clicking Claim Button
    const claimBtn = document.querySelector("#claimTask")
    claimBtn.click()

  
  
  setTimeout(()=>{
        const confirm = document.querySelector("body > div.bootbox.modal.fade.bootbox-confirm.in > div > div > div.modal-footer > button.btn.btn-primary")
  confirm.click()
  setTimeout(()=>{
      const ok = document.querySelector("body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button")
      ok.click()
      setTimeout(()=>{
          const success=document.querySelector("body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button")
          success.click()
      },150)
  },150)
  },200)
}



//Defining my PRESTIGE BUTTON
 
  // Create style element
  const style = document.createElement('style');
  style.innerHTML = `
    .golden-button {
      width: 5cm;
      height: 2cm;
      font-size: 1.2em;
      font-family: 'Georgia', serif;
      font-weight: bold;
      color: #fff8dc;
      background: linear-gradient(145deg, #ffcc00, #ffbf00);
      border: 3px solid #e5c100;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.8),
                  0 0 20px rgba(255, 223, 70, 0.6),
                  inset 0 0 8px rgba(255, 255, 200, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;
      text-shadow: 1px 1px 2px #000;
    }

    .golden-button:hover {
      box-shadow: 0 0 20px rgba(255, 215, 0, 1),
                  0 0 40px rgba(255, 223, 70, 0.9),
                  inset 0 0 16px rgba(255, 255, 230, 0.9);
      transform: scale(1.03);
    }

    .bottom-wrapper {
      position: fixed;
      bottom: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    body {
      margin: 0;
      background-color: #111;
    }
  `;
  document.head.appendChild(style);

  // Create wrapper for positioning
  const wrapper = document.createElement('div');
  wrapper.className = 'bottom-wrapper';

  // Create the button
  const prestigeBtn = document.createElement('button');
  prestigeBtn.className = 'golden-button';
  prestigeBtn.textContent = '💎 Ali On FIRE';

  // Add click action
  prestigeBtn.addEventListener("click", myCollector)

  // Add button to wrapper and wrapper to body
  wrapper.appendChild(prestigeBtn);
  document.body.appendChild(wrapper);




//Prestige Key-shortucut
  
  const prestige = document.querySelector("body > div.bottom-wrapper > button")
function prestigeShort() {
    prestige.click()
  }

  // Add keydown event listener to the whole page
  document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'P' (you can change it)
    if (event.key === 'p' || event.key === 'P') {
      prestigeShort();
    }
  });


 



// Edit Icons onclick
const editIconsList = document.getElementsByClassName("icon-edit");

for (let edit of editIconsList) {
    edit.onclick = () => {
        setTimeout(() => {
            const showDoc = document.querySelector("#showDocumentBtnId");
            if (showDoc) showDoc.click();

            setTimeout(() => {
                const address = document.querySelector("#address1");
                const communeElement = document.getElementsByClassName("select2-chosen")[1];

                if (address && communeElement) {
                    address.value = communeElement.innerText;
                }
            }, 200);
        }, 300);
    };
}

// Automatically update address when commune changes
const selects = document.getElementsByTagName("select");

for (let select of selects) {
    select.addEventListener("change", () => {
        const address = document.querySelector("#address1");
        const selectedOption = select.options[select.selectedIndex];

        if (address && selectedOption && select.className.includes("commune")) {
            address.value = selectedOption.text;
        }
    });
}



 