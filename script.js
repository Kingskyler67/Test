const quizForm   = document.getElementById( 'quiz-form' );
const quizResult = document.getElementById( 'quiz-result' );

if ( quizForm && quizResult ) {
    quizForm.addEventListener( 'submit', function( event ) {
        const formData         = new FormData( quizForm );
        let score              = 0;
        const totalQuestions   = 4;
        const unanswered       = [];

        event.preventDefault();

        for ( let questionNumber = 1; questionNumber <= totalQuestions; questionNumber++ ) {
            const answer = formData.get( `question-${ questionNumber }` );

            if ( null === answer ) {
                unanswered.push( questionNumber );
                continue;
            }

            score += Number( answer );
        }

        if ( unanswered.length > 0 ) {
            quizResult.textContent = `Answer every question first. Missing: ${ unanswered.join( ', ' ) }.`;
            return;
        }

        quizResult.textContent = `Nice job, Skyler. You scored ${ score } out of ${ totalQuestions }!`;
    } );
}
