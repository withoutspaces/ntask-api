const { DataTypes } = require('sequelize')
module.exports = app => {
  const Tasks = app.db.define('Tasks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  return Tasks
}

/*
A	função		app.db.define('Tasks')		é	responsável	por	criar	a
classe	modelo	no	back-end	e	criar	uma	respectiva	tabela	no	banco
de	 dados.
*/
