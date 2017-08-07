// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];




// -------- Your Code Goes Below this Line --------

let htmlStr = ''

for (var i = 0; i < formData.length; i += 1) {
    if (formData[i].type === 'text') {
        htmlStr += "<input type='text' placeholder='" + formData[i].label + "' id='" + formData[i].id + "' />"
    }
    if (formData[i].type === 'email') {
        htmlStr += "<input type='email' placeholder='" + formData[i].label + "' id='" + formData[i].id + "' />"
    }
    if (formData[i].type === 'select') {
        htmlStr += "<select>"
        for (var j = 0;  j < formData[i].options.length; j += 1) {
          htmlStr += "<option value='" + formData[i].options[j].value + "'>" + formData[i].options[j].label + "</option>"
        }
        htmlStr += "</select>"
   }
    if (formData[i].type === 'textarea') {
        htmlStr += "<textarea placeholder='" + formData[i].label + "' id='" + formData[i].id + "'></textarea>"
   }
    if (formData[i].type === 'tel') {
        htmlStr += "<input type='tel' placeholder='" + formData[i].label + "' id='" + formData[i].id + "' />"
   }
}

document.querySelector("#fields").innerHTML = htmlStr
