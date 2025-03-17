const messages = [
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

  exports.getAllMessages = (req, res) =>{
    res.render("index", { title: "Mini Messageboard", messages: messages });
  }
  exports.getMessageForm = (req, res) =>{
    res.render("messagesForm");
  }
  exports.postMessageForm = (req, res) =>{
    const {title, message} = req.body;
    messages.push({id:count, text: message, title: title, added: new Date() });
    count+=1;
    res.redirect('/');
  }
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

 
  
   