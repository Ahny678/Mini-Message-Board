const users = [
    {
      name: "mery!",
      email: "m@email.com",
    },
    {
        name: "derry!",
        email: "dm@email.com",

    }
  ];

  exports.getAllUsers =(req, res, next) =>{
    res.render("user", { title: "All users", users: users });
  }
  exports.getUserCreatePage = (req, res)=>{
    res.render("newUser");
  }

  exports.postUserCreatePage = (req, res)=>{
    const {name, email} = req.body;
    users.push({ name: name, email: email});
    res.redirect("/users");
  }