module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
    title: {
    type: String,
    required: [true, 'required']
    },
    description: {
    type: String
    },
    type: {
    type: String,
    enum: ["Individual", "Company"],
    required: [true, 'required']
    },
    position: {
    type: Number,
    required: [true, 'required']
    }
    },
    { timestamps: true }
    );
    schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    });
    return mongoose.model("companies", schema);
    };