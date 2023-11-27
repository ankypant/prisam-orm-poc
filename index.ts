import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Create User
	// const user = await prisma.user.create({
	//   data: {
	//     name: "Ankit Pant",
	//     email: "mail@ankitpant.com"
	//   }
	// });
	//
	// console.log(user);
	// Get all Users
	// const allUsers = await prisma.user.findMany();
	// console.log(allUsers);
	// Create Article
	// const article = await prisma.article.create({
	//   data: {
	//     title: "Hello World",
	//     body: "Hello World Content",
	//     author: {
	//       connect: { id: 1 }
	//     }
	//   }
	// });
	// console.log(article);
	//
	// Get all Articles
	// const allArticles = await prisma.article.findMany();
	// console.log(allArticles);
	// Create User with Article
	// const userWithArticles = await prisma.user.create({
	//   data: {
	//     name: "Pant",
	//     email: "pant@mail.com",
	//     articles: {
	//       create: {
	//         title: "Hello World!!!!!!",
	//         body: "Hello World Content!!!!!!!!!!!!!!"
	//       }
	//     }
	//   }
	// });
	// console.log(userWithArticles);
	//
	// Get all Users with Articles
	// const allUsersWithArticles = await prisma.user.findMany({
	// 	include: {
	// 		articles: true
	// 	}
	// });
	// console.log(allUsersWithArticles);
	//
	// Update User
	// const updatedUser = await prisma.user.update({
	// 	where: { id: 1 },
	// 	data: {
	// 		name: "Ankit Pant Updated"
	// 	}
	// });
	// console.log(updatedUser);
	//
	// Delete Article
	// const deleteArticle = await prisma.article.delete({
	// 	where: { id: 2 }
	// });
	// console.log(deleteArticle);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
