const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'react',
    password: 'Sd2568Grom',
    port: 5432,
});

const login = (body) => {
    return new Promise(function (resolve, reject) {
        const {username, password} = body
        pool.query('SELECT * FROM users WHERE username=$1 AND password=$2', [username, password], (error, results) => {
            if (error) {
                reject(error)
            }
            if (!results)
                resolve(null)
            else if (results.rows.length === 1)
                resolve(results.rows[0]);
        })
    })
}

const getAllUsers = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const getAllProducts = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const registration = (body) => {
    return new Promise(function (resolve, reject) {
        const {username, password, isAdmin} = body
        pool.query('INSERT INTO users (username, password, role) VALUES ($1, $2, $3)', [username, password, isAdmin], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(body)
        })
    })
}

const add_product = (body) => {
    return new Promise(function(resolve, reject){
    const {productname, price, quantity} = body
    pool.query('INSERT INTO products (productname, price, quantity) VALUES ($1, $2, $3)', [productname, price, quantity], (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(body)
    })
    })
}

const update = (body) => {
    return new Promise(function (resolve, reject) {
        const {id, username, password, role} = body
        pool.query('UPDATE users SET username=$1, password=$2, role=$3 WHERE id=$4', [username, password, role, id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve("ok")
        })
    })
}

const updateProduct = (body) => {
    return new Promise(function (resolve, reject) {
        const {id, productname, price, quantity} = body
        pool.query('UPDATE products SET productname=$1, price=$2, quantity=$3 WHERE id=$4', [productname, price, quantity, id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve("ok")
        })
    })
}

const deleteUser = (body) => {
    return new Promise(function (resolve, reject) {
        const {id} = body
        pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve("ok")
        })
    })
}

const deleteProduct = (body) => {
    return new Promise(function (resolve, reject) {
        const {id} = body
        pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve("ok")
        })
    })
}

module.exports = {
    getAllUsers,
    getAllProducts,
    updateProduct,
    login,
    registration,
    deleteUser,
    deleteProduct,
    update
}