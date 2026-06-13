import users from "../../../src/data/users";

export async function GET() {
    console.log(users);
    return Response.json(users);
}