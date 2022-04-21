const express = require('express');
const app = express();
const PORT = 3000;
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}...`);
});
