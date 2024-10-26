import { textDemo } from '@/functions/constants/demo'
import ChatContent from '@/features/ui/chat/content'

export default function Home() {
  return (
    <>
      <h2 className="c_h2">使用するテキストデータ</h2>
      <p>{textDemo}</p>
      <h2 className="c_h2">リンクのPDFと動画処理出力結果</h2>
      {textDemo.map((item, index) => (
        <div key={index}>
          <ChatContent text={item} />
        </div>
      ))}
    </>
  );
}
