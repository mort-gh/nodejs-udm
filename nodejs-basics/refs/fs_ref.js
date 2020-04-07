const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw new Error(err);

//   console.log('Папка была создана');
// });

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world ',
//   err => {
//     if (err) throw new Error(err);
//     console.log('Файл был создан');

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       'From append file',
//       err => {
//         if (err) throw new Error(err);
//         console.log('Файл был изменен');

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw err;
//             console.log(Buffer.from(data).toString());
//           }
//         );
//       }
//     );
//   }v
// );

fs.rename(
  path.join(__dirname, 'notes', 'notes.txt'),
  path.join(__dirname, 'notes', 'mynotes.txt'),
  err => {
    if (err) throw err;
    console.log('Файл был переименован');
  }
);
