import { Prisma, PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice",
        email: "alice@prisma.io",
        posts: {
            create: [
                {
                    title: "Join the Prisma Slack",
                    content: "https://slack.prisma.io",
                    published: true,
                },
                {
                    title: "Follow Prisma on Twitter",
                    content: "https://twitter.com/prisma",
                    published: true,
                }
            ]
        }
    },
    {
        name: "Bob",
        email: "bob@prisma.io",
        posts: {
            create: [
                {
                    title: "Learn Prisma",
                    content: "https://www.prisma.io/docs",
                    published: true,
                }
            ],
        },
    },
];

export async function main() {
    for(const u of userData){
        await prisma.user.create({data: u})
    }
}

main();