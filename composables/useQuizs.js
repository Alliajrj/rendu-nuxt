export default async function () {
    const quizzs = await queryContent('quizz').find();

    return {
        quizzs
    }

}