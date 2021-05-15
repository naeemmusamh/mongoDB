'use strict';

class foodCollection {
    constructor(data) {
        this.data = data;
    }

    get(id) {
        if (id) {
            return this.data.findById(id);
        } else {
            return this.data.find({})
        }
    }

    getBy(obj) {
        return this.data.find(obj);
    }

    create(obj) {
        let newFood = new this.data(obj);
        return newFood.save();
    }

    update(id, obj) {
        return this.data.findByIdAndUpdate(id, obj, { new: true });
    }

    delete(id) {
        return this.data.findByIdAndDelete(id);
    }
}

module.exports = foodCollection;