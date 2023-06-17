module.exports = (sequelize,DataTypes) => {
    const Dog = sequelize.define('dog', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tail_length: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isEven(value) {
                    if (parseInt(value) < 0) {
                      throw new Error('Only positive number is allowed');
                    }
                  }
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Dog;
}