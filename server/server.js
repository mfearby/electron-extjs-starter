module.exports = () => {

  const { Router } = require('electron-routes');

  // define custom mrf:// protocol
  const web = new Router('mrf'); 

  web.get('foo', (req, res) => {
    res.json({
      hello: 'world',
    });
  });

  const people = [
    { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
    { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
    { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
    { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" },
    { name: 'Kathryn',  email: "kathryn@voyager.com",           phone: "777-111-1111" },
    { name: 'Chakotay', email: "chakotay@voyager.com",          phone: "777-222-2222" },
    { name: 'Tuvok',    email: "tuvok@voyager.com",             phone: "777-333-3333" },
    { name: 'Seven',    email: "seven@voyager.com",             phone: "777-444-4444" },
    { name: 'Benjamin', email: "benjamim@ds9.com",              phone: "999-111-1111" },
    { name: 'Odo',      email: "odo@ds9.com",                   phone: "999-222-2222" },
    { name: 'Quark',    email: "quark@ds9.com",                 phone: "999-333-3333" },
    { name: 'Dax',      email: "dax@ds9.com",                   phone: "999-444-4444" }
  ];

  web.get('personnel/?_dc=:_dc&page=:page&start=:start&limit=:limit', (req, res) => {

    const start = req.params.start < people.length ? req.params.start : 0;
    const end = req.params.limit * req.params.page;
    const limit = end > people.length ? people.length : end;
    const subset = people.slice(start, end);

    res.json({
      success: true,
      data: subset,
      total: people.length,
      message: ''
    });
  });

}