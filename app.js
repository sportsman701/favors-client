const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 7600;
const app = express();

app.use(express.static(path.join(__dirname, './build')));

// production mode
if(process.env.NODE_ENV === 'production') {
  try {
    app.get('*', (req, res) => {
      try {
        // res.sendFile(path.join(__dirname = './build/index.html'));
        res.sendFile(path.join(__dirname, './build/index.html'));
      } catch(err) {
        console.log(err);
        res.json({ error: true, msg: 'could not send file...' });
      }
    })
  } catch(e) {
    console.log({
      error: e,
      message: 'could not'
    });
  }
}

/* --- */


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
