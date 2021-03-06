import db from '../../models'
import { Sequelize } from '../../models'
import Parametrizer from '../../utils/parametrizer'
import RESPONSES from '../../utils/responses'
import validRoles from '../../utils/validRoles'
const { Op } = Sequelize
class UsersController {
  static Fetch(req, res) {
    let roles = req.query.roles.split(',')
    db.User.findAll({
      include: [
        {
          model: db.Role,
          attributes: ['id', 'name'],
          as: 'roles',
          through: { attributes: [] },
          where: roles
            ? {
              [Op.or]:
                {id: roles},
              }
            : null,
        },
      ],
    })
      .then((data) => {
        res.status(200).json(data)
      })
      .catch(Sequelize.ValidationError, (msg) =>
        res.status(422).json({ message: msg.errors[0].message }),
      )
      .catch((err) => {
        res
          .status(400)
          .json({ message: RESPONSES.DB_CONNECTION_ERROR.message + err })
      })
  }
  static FetchOne(req, res) {
    const attrs = ['id', 'firstname', 'lastname', 'email']
    const id = +req.params.id
    db.User.findOne({
      where: {
        id,
      },
      attributes: attrs,
      include: [
        {
          model: db.Role,
          as: 'roles',
          through: { attributes: ['UserId', 'RoleId'] },
        },
      ],
      // order: [
      //   [db.LoanDetail, 'id', 'ASC']
      // ]
    })
      .then((user) => {
        if (!user) {
          res.status(404).json({
            error: RESPONSES.RECORD_NOT_FOUND_ERROR.message,
          })
        } else {
          res.status(200).json({
            ok: true,
            payload: user,
          })
        }
      })
      .catch(Sequelize.ValidationError, (msg) => {
        res.status(422).json({
          message: msg.errors[0].message,
        })
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: RESPONSES.DB_CONNECTION_ERROR.message + err })
      })
  }
  static Create(req, res) {
    const {
      firstname,
      lastname,
      email,
      password,
      img,
      role,
    } = req.body
    db.sequelize
      .transaction({ autocommit: false })
      .then(async (t) => {
        const userModel = await db.User.create(
          {
            firstname,
            lastname,
            email,
            password,
            img
          },
          { transaction: t },
        )
        userModel.password = ':P'
        let roleId = validRoles.Alumno
        switch (+role) {
          case validRoles.Administrador:
            roleId = validRoles.Administrador
            break
          case validRoles.Profesor:
            roleId = validRoles.Profesor
            break
          default:
            roleId = validRoles.Alumno
            break
        }
        const rolesModel = await db.Role.findAll(
          {
            where: {
              id: roleId,
            },
          },
          { transaction: t },
        )
        await userModel.setRoles(rolesModel, { transaction: t })
        t.commit()
        return userModel
      })
      .then((user) => {
        res.status(200).json({
          ok: true,
          user,
        })
      })
      .catch((err) => {
        res
          .status(400)
          .json({ description: RESPONSES.DB_CONNECTION_ERROR + err })
      })
  }
  static Update(req, res) {
    const { firstname, lastname, email, password, phone, img } = req.body
    const { id } = req.params
    db.User.update(
      {
        firstname,
        lastname,
        email,
        password,
        phone,
        img,
      },
      { where: { id } },
    )
      .then((user) => {
        res.status(200).json(user)
      })
      .catch(Sequelize.ValidationError, (msg) =>
        res.status(422).json({ message: msg.errors[0].message }),
      )
      .catch((err) =>
        res
          .status(400)
          .json({ message: RESPONSES.DB_CONNECTION_ERROR.message + err }),
      )
  }
  static Delete(req, res) {
    const { id } = req.params
    db.User.destroy({ where: { id } })
      .then((result) => {
        if (result === 0) {
          res.status(404).json({
            error: 'Registro no encontrado!',
          })
        } else {
          res.status(200).json({
            message: 'El usuario ha sido desactivado!',
          })
        }
      })
      // .catch(Sequelize.ValidationError, (msg) =>
      //   res.status(422).json({ message: msg.errors[0].message }),
      // )
      // .catch(Sequelize.ForeignKeyConstraintError, (err) =>
      //   res
      //     .status(400)
      //     .json({
      //       message:
      //         'El registro no puede ser eliminado por que ya está en uso. Solo puede desactivarlo',
      //     }),
      // )
      .catch((err) =>
        res
          .status(400)
          .json({ message: RESPONSES.DB_CONNECTION_ERROR.message + err }),
      )
  }
}

export default UsersController
