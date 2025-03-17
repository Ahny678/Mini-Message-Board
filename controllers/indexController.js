const { body, validationResult } = require("express-validator");
const lengthErr = "must be between 18 and 120 characters.";
const limitErr = "must be max of 7 characters.";
let messages = [
    {
      id: 1,
      text: "Hi there!",
      title: "Greet",
      added: new Date()
    },
    {
        id: 2,
      text: "Hello World!",
      title: "Greet2",
      added: new Date()
    }
  ];
  let count = 3;

  const validateMessage = [
    body("message").optional().trim()
      .isLength({ min: 18, max: 120 }).withMessage(`Name ${lengthErr}`),
      body("title").trim()
      .isLength({ min: 0, max: 7 }).withMessage(`Name ${limitErr}`),
      
     
  ];

  exports.getAllMessages = (req, res) =>{
    res.render("index", { title: "Mini Messageboard", messages: messages });
  }
  exports.getMessageForm = (req, res) =>{
    res.render("messagesForm");
  }
  exports.postMessageForm =[validateMessage, (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("messagesForm", {
        errors: errors.array(),
      });
    }

    const {title, message} = req.body;
    messages.push({id:count, text: message, title: title, added: new Date() });
    count+=1;
    res.redirect('/');
  }
]
  exports.getUpdateMessageForm = (req, res) =>{
    const messageId = req.params.messageId;
    res.render('updateMessage', {messageId: messageId} );
    
  }
  exports.updateMessageForm = (req, res) =>{
    const {id, message } = req.body;
    let NumId = Number(id);
    
    const indexToUpdate = messages.findIndex(obj => obj.id === NumId);

    if (indexToUpdate !== -1) {
    messages[indexToUpdate].text = message;
    } else {
    console.log(`Message with id ${id} not found`);
    // Handle the case where the message is not found
    }
    res.redirect('/'); 
  }

  exports.deleteMessage = (req, res)=>{
    const IdToDelete = Number(req.params.messageId);
    
    console.log(`Message with id ${IdToDelete}  found`);
    let newMessageArr =  messages.filter(obj => obj.id === IdToDelete);
    messages=newMessageArr;
    res.redirect('/'); 
  }

 
  
   