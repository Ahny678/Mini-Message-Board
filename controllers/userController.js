const { body, validationResult } = require("express-validator");
const users = [
    {
      name: "mery!",
      email: "m@email.com",
    },
    {
        name: "derry!",
        email: "dm@email.com",

    },
    {
      name: "mery!",
      email: "m33@email.com",
    },
  ];
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "not a valid email format.";

const validateUser = [
  body("name").trim()
    .isAlpha().withMessage(`Name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Name ${lengthErr}`),
    body("email").trim()
    .isEmail().withMessage(`Email is ${emailErr}`)
   
];

  exports.getAllUsers =(req, res, next) =>{
    res.render("user", { title: "All users", users: users });
  }
  exports.getUserCreatePage = (req, res)=>{
    res.render("newUser");
  }

  exports.postUserCreatePage =[validateUser, (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("newUser", {
        errors: errors.array(),
      });
    }

    const {name, email} = req.body;
    users.push({ name: name, email: email});
    res.redirect("/users");
  }
  ]

  exports.searchUser = (req, res)=>{
    let name = req.query.name;
    let matchedUsers = users.filter(obj => obj.name.toLowerCase().includes(name.toLowerCase()));
    console.log(matchedUsers)
    res.render('searchUser', {matchedUsers: matchedUsers})
  }
  