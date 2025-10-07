import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    header: string;
    content: string;
    comments: mongoose.Types.ObjectId[];
    author: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    header: string;
    content: string;
    comments: mongoose.Types.ObjectId[];
    author: mongoose.Types.ObjectId;
}, {}, mongoose.DefaultSchemaOptions> & {
    header: string;
    content: string;
    comments: mongoose.Types.ObjectId[];
    author: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    header: string;
    content: string;
    comments: mongoose.Types.ObjectId[];
    author: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    header: string;
    content: string;
    comments: mongoose.Types.ObjectId[];
    author: mongoose.Types.ObjectId;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    header: string;
    content: string;
    comments: mongoose.Types.ObjectId[];
    author: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=article.d.ts.map