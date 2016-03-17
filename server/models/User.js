/**
 * Here we map out any User methods we need and return a new Pseudoclassical class
 * which extend the DB user.
 */

'use strict';
const Sequelize = require('sequelize');

module.exports = function User(sequelizeInstance) {
  const seq = sequelizeInstance;
  return seq.define('User', {
    userName: Sequelize.STRING,
  }, {
    classMethods: {
      getUser: function getUser(whereObj) {
        return this.findOne({ where: whereObj,
          include: [{ model: seq.models.Group }],
        })
        .then((user) => {
          if (!user) { throw new Error('User not found'); }
          return seq.models.Event.getEventsForUser(user)
          .then((events) => {
            user.dataValues.Events = events;
            return user;
          });
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
      },
      addFriend: function addFriend(friendId) {
        // check to see if friendId is < userId
        // createFriendship(Math.min(friendId, userId), Math.max(friendId, userId))
        return 5;
      },
      getEventsForUser: function getEventsForUser(user) {
        if (!user.Groups) {
          throw Error('Invalid User object.  Make sure you are including the users groups');
        }

        const userInvites = this.findAll({
          include: [{ model: seq.models.User,
            where: { id: user.id } }],
        });

        const groupInvites = this.findAll({
          include: [{ model: seq.models.Group,
            where: { id: { $in: user.Groups.map(group => group.id) } } }],
        });

        const personalEvents = this.findAll({
          where: { hostUserId: user.id },
        });

        return Promise.all([userInvites, groupInvites, personalEvents])
        .then((allEvents) => allEvents.reduce((memo, current) => memo.concat(current)));
      },
    },
  });
};

// To add a user to a group you could do either of the following
  // userInstance.addGroup(groupObj)  or addGroups (plural) and pass an array
  // groupInstance.addUser(userObj) or addUsers (plural)
