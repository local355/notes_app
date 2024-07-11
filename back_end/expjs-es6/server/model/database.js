import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config({path:`${__dirname}/../../.env`, debug: process.env.DEBUG, override: true})

console.log(process.env.MYSQL_DATABASE)
console.log(`${__dirname}/../../.env`)
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()



export async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM notes ORDER BY created DESC")
  return rows
}

export async function getNote(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM notes
  WHERE id = ?
  `, [id])
  return rows[0]
}

export async function createNote(title, contents) {
  const [result] = await pool.query(`
  INSERT INTO notes (title, contents)
  VALUES (?, ?)
  `, [title, contents])
  const id = result.insertId
  return getNote(id)
}

export async function deleteNote(id){
  const [result] = await pool.query(`
  DELETE FROM notes WHERE id = ?`, [id])
  return result
}

export async function updateNote(title, contents,id){
   await pool.query(`
    update notes set title = ?, contents=? where id = ?`, [title,contents,id]).then(
    res => {
      console.log("db ok start")
      console.log(id,contents,title)
      console.log(res)
      return res
      console.log("db ok end")
    }).catch(err => {

      console.log("db err start")
      console.log(err)
      console.log("db err end")
    })
  // return result
}