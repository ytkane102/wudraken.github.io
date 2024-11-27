const pagePrefix = "page3"; // 1ページ目の識別子
  
  
  document.getElementById('prev-button').addEventListener('click', () => {
    window.location.href = "test2.html"; 
  });

  document.getElementById('submit-quiz').addEventListener('click', () => {
    window.location.href = "result.html"; // 特定のページに戻る
  });
  
  const quiz = [
      {
        question: 'のび太が幼稚園のころに毎日一緒に遊んでいた、栗色の髪をした外国人みたいな女の子は誰か。',
        answers: [ 'エミちゃん', 'ミカちゃん','ノンちゃん','サッちゃん'],
        correct: 'ノンちゃん'
      }, 
      {
        question: 'のび太が住む町は、東京都の何区にあるか。',
        answers: [ '足立区', '練馬区','江戸川区','豊島区'],
        correct: '練馬区'
      },
      {
        question: '「大予言・地球の滅びる日」にて、のび太とスネ夫が予言書と勘違いした物の正体は何か。',
        answers: [ 'ドラえもんの日記帳', '50年前の新聞','人間ブックカバー','囲碁の解説書'],
        correct: 'ドラえもんの日記帳'
      },
      {
        question: '「へやいっぱいの大ドラ焼き」ができるきっかけとなったひみつ道具は何か。',
        answers: [ 'ビッグライト', 'もしもボックス','イキアタリバッタリサイキンメーカー','ねがい星'],
        correct: 'イキアタリバッタリサイキンメーカー'
      },
      {
        question: '「虹のビオレッタ」とは何か。',
        answers: [ '伊藤つばさの新曲', 'ジャイ子が描いたマンガ','ひみつ道具の名前','あやとりの作品名'],
      　correct: 'ジャイ子が描いたマンガ'
      },
      {
        question: '「しんじゅ製造アコヤケース」にて、真珠になってしまったのは誰か。',
        answers: [ 'のび太', '先生','スネ夫','ジャイアン'],
      　correct: 'スネ夫'
      },
      {
        question: '「タイムふろしき」にて、スネ夫のママはタイムふろしきを何に対して使用したか。',
        answers: [ '10cmのハイヒール', '超高級腕時計','10カラットのダイヤモンド','ワニ皮のバッグ'],
      　correct: 'ワニ皮のバッグ'
      },
      {
        question: '「雪山のロマンス」にて、のび太がした忘れ物は何か。',
        answers: [ '缶切り', 'ライト','栓抜き','マッチ'],
      　correct: '缶切り'
      },
      {
        question: '「しあわせトランプの恐怖」にて、宝くじに当選したのは誰か。',
        answers: [ 'のび太', 'しずか','スネ夫','ジャイアン'],
      　correct: 'ジャイアン'
      },
      {
        question: 'スネ夫がペットクリームを使ってペットにした物は何か。',
        answers: [ 'ラジコン', '一万円札','勾玉','庭石'],
      　correct: '庭石'
      },
    ];
  
    const $doc = document;
  const $quizContainer = $doc.getElementById('quiz-container');
  const $submitQuiz = $doc.getElementById('submit-quiz');
  const $quizResult = $doc.getElementById('quiz-result');
  
  const initQuiz = () => {
    quiz.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('mb-4');
      
      // 質問文を追加
      const questionTitle = document.createElement('p');
      questionTitle.textContent = `${index + 1}. ${q.question}`;
      questionDiv.appendChild(questionTitle);
      
      // 選択肢を追加
      q.answers.forEach(answer => {
        const label = document.createElement('label');
        label.classList.add('d-block');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `quiz-${index}`; // 質問ごとに一意のname属性
        input.value = answer;
  
        // 回答の保存イベントリスナーを設定
        input.addEventListener('change', () => {
          const questionId = input.name; // 例: quiz-1
          localStorage.setItem(`${pagePrefix}-${questionId}`, input.value); // 回答を保存
        });
  
        // 保存された回答をチェック
        const savedAnswer = localStorage.getItem(`${pagePrefix}-quiz-${index}`);
        if (savedAnswer === answer) {
          input.checked = true; // 選択状態を復元
        }
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        questionDiv.appendChild(label);
      });
      
      $quizContainer.appendChild(questionDiv);
    });
  };
  
  // 初期化
  document.addEventListener('DOMContentLoaded', initQuiz);