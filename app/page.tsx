"use client";
/* eslint-disable @next/next/no-img-element -- Remote competition media is intentionally rendered without optimization proxies. */

import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">→</span>;
const Tick = () => <span className="tick" aria-hidden="true">✓</span>;

const gains = [
  ["01", "Định hình vấn đề theo SDGs", "Bắt đầu từ một vấn đề xã hội thực tế gắn với Mục tiêu Phát triển Bền vững của Liên Hợp Quốc và thu hẹp thành bài toán AI có thể giải quyết."],
  ["02", "Thực hành phát triển AI", "Xây dựng nguyên mẫu bằng Python, API AI, thị giác máy tính, nhận dạng giọng nói và mô hình ngôn ngữ."],
  ["03", "Tư duy khởi nghiệp", "Phát triển mô hình kinh doanh, đánh giá tính khả thi, giá trị sử dụng và tiềm năng đầu tư của giải pháp."],
  ["04", "Thuyết trình trước hội đồng", "Trình bày chính thức, demo trực tiếp, phản biện và bảo vệ dự án trước ban giám khảo quốc tế."],
  ["05", "Làm việc nhóm theo vai trò", "Mỗi thành viên phụ trách một phần: nghiên cứu, lập trình, mô hình kinh doanh, thiết kế hoặc truyền thông."],
];

const timeline = [
  ["14/07/2026", "Trực tuyến", "Giới thiệu", "Phiên khai mạc giới thiệu cuộc thi STEM đến trường học, học sinh và phụ huynh."],
  ["20/07–02/08 · 07/09–20/09", "Trực tuyến & trực tiếp", "Đào tạo", "Hai giai đoạn đào tạo về công cụ AI, xây dựng nguyên mẫu và thiết kế mô hình kinh doanh."],
  ["03/08–26/09/2026", "Trực tuyến & trực tiếp", "Cố vấn dự án", "Nộp đề xuất và video giới thiệu, sau đó phát triển nguyên mẫu và kế hoạch kinh doanh cùng cố vấn."],
  ["27/09/2026", "Trực tuyến & trực tiếp", "Tổng duyệt thuyết trình", "Chạy thử toàn bộ phần trình bày và demo trực tiếp trước vòng chung kết."],
  ["03–04/10/2026", "Trực tiếp", "Chung kết quốc tế", "Thuyết trình, trình diễn trực tiếp và bảo vệ dự án trước hội đồng tại Đà Nẵng, Việt Nam."],
];

const opportunities = [
  ["🇸🇬", "13/06/2026 · Singapore", "Vòng loại ICode4Good ASEAN League lần thứ 8"],
  ["🇲🇾", "11/07/2026 · Malaysia", "Vòng loại Malaysia"],
  ["🇸🇬", "07/08/2026 · Singapore", "Chung kết ASEAN ICode4Good"],
  ["🇨🇳", "17/08/2026 · Trung Quốc", "Công bố đội vào chung kết AIGC 2026"],
  ["🇨🇳", "22/08/2026 · Trung Quốc", "Triển lãm trực tuyến và tương tác cộng đồng AIGC"],
  ["🇸🇬", "19/09/2026 · Singapore", "Lễ trao giải AIGC tại AAEOY"],
  ["🇭🇰", "04/10/2026 · Hồng Kông", "Chung kết toàn cầu ICode4Good"],
  ["🇻🇳", "04/10/2026 · Việt Nam", "Asian Next Generation Citizen (ANGC)"],
];

const modules = [
  ["ZMd8h4VVV1o", "ICODE", "Tư duy tính toán và thiết kế thuật toán"],
  ["e6yu7zAwaJM", "AI Tech4Good — Coding & Crafting", "Biểu diễn robot kết hợp STEAM và nghệ thuật"],
  ["uFg_C3euMD4", "AIGC", "Sáng tạo nội dung số bằng AI tạo sinh"],
  ["3aQQh4B__M8", "ED4C", "Thiết kế kỹ thuật vì cộng đồng"],
  ["EENk3S1Bnkc", "G-CLIP", "Dự án học tập và đổi mới toàn cầu"],
];

function Countdown() {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0, done: false });
  useEffect(() => {
    const tick = () => {
      const diff = new Date("2026-10-03T08:00:00+07:00").getTime() - Date.now();
      if (diff <= 0) return setLeft({ d: 0, h: 0, m: 0, s: 0, done: true });
      const seconds = Math.floor(diff / 1000);
      setLeft({ d: Math.floor(seconds / 86400), h: Math.floor(seconds % 86400 / 3600), m: Math.floor(seconds % 3600 / 60), s: seconds % 60, done: false });
    };
    tick(); const timer = setInterval(tick, 1000); return () => clearInterval(timer);
  }, []);
  return <div className="countdown"><p>ĐẾM NGƯỢC ĐẾN CHUNG KẾT QUỐC TẾ</p>{left.done ? <strong>Sự kiện đã bắt đầu!</strong> : <div>{[[left.d,"Ngày"],[left.h,"Giờ"],[left.m,"Phút"],[left.s,"Giây"]].map(([n,l]) => <span key={l}><b>{String(n).padStart(2,"0")}</b><small>{l}</small></span>)}</div>}<a href="#lich-trinh">03–04/10/2026 · Đà Nẵng, Việt Nam</a></div>;
}

function Evaluation() {
  const [stage, setStage] = useState(0);
  const data = stage === 0 ? {
    title:"Ý tưởng & Đề xuất", when:"Vòng cố vấn dự án · 03/08–26/09/2026", submit:["Đề xuất dự án","Video giới thiệu","Mô tả vấn đề","Khái niệm giải pháp"], criteria:[["Xác định vấn đề",10],["Đổi mới sáng tạo",20],["Công nghệ AI",20],["Tính khả thi kỹ thuật",15],["Tác động xã hội",20],["Trình bày & giao tiếp",15]]
  } : { title:"Nguyên mẫu & Thuyết trình", when:"Chung kết quốc tế · 03–04/10/2026 · Đà Nẵng", submit:["Nguyên mẫu hoạt động","Kế hoạch kinh doanh","Poster","Video demo","Thuyết trình trực tiếp"], criteria:[["Hiệu năng nguyên mẫu",20],["Ứng dụng AI",20],["Đổi mới sáng tạo",20],["Tác động xã hội",15],["Tiềm năng kinh doanh",10],["Thuyết trình & phản biện",15]] };
  return <section className="section" id="danh-gia"><Heading eye="Đánh giá cuộc thi" title="Bài dự thi được chấm như thế nào?" lead="Các đội được đánh giá qua hai giai đoạn. Chọn một giai đoạn để xem sản phẩm cần nộp và trọng số chấm điểm."/><div className="container"><div className="tabs" role="tablist"><button className={stage===0?"active":""} onClick={()=>setStage(0)}>Giai đoạn 1: Ý tưởng & Đề xuất</button><button className={stage===1?"active":""} onClick={()=>setStage(1)}>Giai đoạn 2: Nguyên mẫu & Chung kết</button></div><div className="evaluation-panel"><div><p className="eyebrow">Giai đoạn {stage+1}</p><h3>{data.title}</h3><p>{data.when}</p><h4>Sản phẩm đội thi cần nộp</h4><div className="chips">{data.submit.map(x=><span key={x}>{x}</span>)}</div></div><div><h4>Tiêu chí chấm điểm</h4>{data.criteria.map(([name,pct])=><div className="criterion" key={name}><span>{name}</span><b>{pct}%</b><i><em style={{width:`${Number(pct)*4}%`}}/></i></div>)}</div></div></div></section>;
}

function Heading({eye,title,lead}:{eye:string,title:string,lead?:string}) { return <div className="container center heading"><p className="eyebrow">{eye}</p><h2>{title}</h2><div className="rule"/>{lead&&<p className="lead">{lead}</p>}</div>; }

export default function Home() {
  return <main>
    <nav className="language-bar"><div className="container language-inner"><img src="https://flagcdn.com/vn.svg" alt="Quốc kỳ Việt Nam"/><div className="language-switch"><span>EN</span><strong>VI</strong></div></div></nav>
    <section className="hero"><div className="container hero-grid"><div><p className="eyebrow light">Mô-đun 3 · Asian Next Generation Citizen 2026</p><h1>AI TECH4GOOD<br/><span>PHÁT TRIỂN &amp; THUYẾT TRÌNH</span></h1><p className="hero-copy">Cuộc thi theo đội, nơi học sinh xác định một vấn đề xã hội thực tế, xây dựng giải pháp ứng dụng AI và thuyết trình trước hội đồng quốc tế.</p><ul className="pills"><li>Đội 3–5 thành viên</li><li>Từ 13 tuổi</li><li>Chung kết tại Đà Nẵng</li></ul><div className="actions"><a className="button primary" href="https://forms.gle/Z7CTcQWVJyEFzAun6" target="_blank" rel="noreferrer">Đăng ký ngay <Arrow/></a><a className="button ghost-light" href="#the-le">Xem thể lệ</a></div></div><a className="video-card" href="https://www.youtube.com/watch?v=cafsw8zGHDY" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/cafsw8zGHDY/hqdefault.jpg" alt="Giới thiệu AI Tech4Good"/><span className="play">▶</span><span className="video-label">Xem video giới thiệu</span></a></div></section>
    <section className="count-section"><div className="container"><Countdown/></div></section>

    <section className="section" id="gioi-thieu"><Heading eye="Về mô-đun" title="AI Tech4Good – Phát triển & Thuyết trình là gì?"/><div className="container about-grid"><article className="feature-card"><p className="eyebrow">Cuộc thi AI Tech 4 Good</p><h3>Biến công nghệ thành tác động tích cực</h3><p>Cuộc thi công nghệ quốc tế trao quyền cho học sinh khám phá Trí tuệ nhân tạo, Lập trình, Robotics và Sáng tạo số thông qua những thách thức thực tế.</p><p>Thông qua dự án thực hành, học sinh phát triển tư duy tính toán, sáng tạo, làm việc nhóm, thiết kế kỹ thuật và cách sử dụng công nghệ mới có trách nhiệm.</p><a className="video-inline" href="https://www.youtube.com/watch?v=ydLyfI35cJ8" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/ydLyfI35cJ8/hqdefault.jpg" alt="Video AI Tech 4 Good"/><span>▶</span></a></article><article className="feature-card"><p className="eyebrow">Đối tác kỹ thuật</p><h3>MARS Academy · Malaysia</h3><p>MARS Academy là tổ chức giáo dục hàng đầu Malaysia, chuyên về STEM, AI, Robotics và Tư duy tính toán.</p><p>Với vai trò đối tác kỹ thuật, MARS cung cấp chuyên môn, tư vấn giáo dục và hỗ trợ phát triển hoạt động học tập, giúp học sinh xây dựng năng lực sẵn sàng cho tương lai.</p><div className="partner-mark">MARS<br/><small>ACADEMY</small></div></article></div><div className="container stats"><article><strong>3–5</strong><span>thành viên mỗi đội</span></article><article><strong>3</strong><span>bảng tuổi</span></article><article><strong>2</strong><span>vòng đánh giá</span></article><article><strong>AI + SDGs</strong><span>trọng tâm dự án</span></article><article><strong>Đà Nẵng</strong><span>chung kết quốc tế</span></article></div></section>

    <section className="section cream"><Heading eye="Hệ sinh thái toàn cầu" title="Được hậu thuẫn bởi mạng lưới quốc tế" lead="AI Tech4Good được hỗ trợ bởi các tổ chức giáo dục, công nghệ và cộng đồng đổi mới sáng tạo thúc đẩy AI, Lập trình, Robotics và STEM trên toàn thế giới."/><div className="container ecosystem"><div><strong>40+</strong><span>Khu vực đang hoạt động trên toàn cầu</span></div><div className="world">🌏<i className="pin p1"/><i className="pin p2"/><i className="pin p3"/><i className="pin p4"/></div></div></section>

    <section className="section"><Heading eye="Giá trị giáo dục" title="Học sinh nhận được gì?" lead="Xây dựng AI mới chỉ là một nửa thử thách. Người học rời cuộc thi với khả năng xác định vấn đề, tạo giải pháp hoạt động được và thuyết phục người khác về giá trị của nó."/><div className="container gain-grid">{gains.map(([num,title,text])=><article className="gain" key={num}><span>{num}</span><div className="icon-bubble">✦</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section alt" id="the-le"><Heading eye="Thể lệ cuộc thi" title="Ai tham gia, thi nội dung gì và chấm thế nào?"/><div className="container steps">{[["1","Đối tượng tham dự",<>Học sinh, sinh viên từ 10 quốc gia Đông Nam Á; chia ba bảng tuổi từ 13 trở lên.</>],["2","Thành lập đội",<>Mỗi đội gồm <strong>3–5 học sinh</strong>, được hướng dẫn bởi 1–2 giáo viên hoặc cố vấn.</>],["3","Thử thách",<>Xác định vấn đề xã hội gắn với SDGs và phát triển một giải pháp ứng dụng AI.</>],["4","Hai vòng thi",<>Vòng cố vấn nộp đề xuất và video; chung kết trình bày, demo và bảo vệ dự án.</>]].map(([n,t,d])=><article className="step" key={String(n)}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="section"><Heading eye="Bảng tuổi" title="Mở rộng cho ba nhóm tuổi"/><div className="container ages">{[["THCS","13–15"],["THPT","16–18"],["Đại học","19+"]].map(([x,y])=><article key={x}><h3>{x}</h3><strong>{y}</strong><span>tuổi</span></article>)}</div></section>

    <section className="section navy"><Heading eye="Chuẩn bị trước cuộc thi" title="Đội thi cần trang bị những gì?"/><div className="container prepare"><article><h3>🧩 Kỹ năng cốt lõi</h3><ul><li>Giải quyết vấn đề và làm việc nhóm</li><li>Nghiên cứu, phát triển ý tưởng</li><li>Giao tiếp và thuyết trình</li></ul></article><article><h3>🤖 Công cụ phát triển AI</h3><ul><li>Python và các API AI</li><li>Thị giác máy tính</li><li>Công cụ giọng nói / LLM</li><li>Google Colab, VS Code</li></ul></article><article><h3>🎨 Nội dung & thiết kế</h3><ul><li>ChatGPT, DALL·E / Midjourney</li><li>Runway / Pika</li><li>Canva, PowerPoint</li></ul></article></div></section>

    <Evaluation/>

    <section className="section cream"><Heading eye="Hạng mục 03 · AI Tech 4 Good" title="Giải thưởng Phát triển & Thuyết trình" lead="Vinh danh các đội xuất sắc tại Asian Next Generation Citizen Competition 2026."/><div className="container medals">{[["🥇","Quán quân","Dự án tổng thể mạnh nhất về tác động xã hội, giải pháp AI và phần thuyết trình."],["🥈","Á quân 1","Dự án mạnh thứ hai trên toàn bộ tiêu chí chấm điểm."],["🥉","Á quân 2","Dự án mạnh thứ ba trên toàn bộ tiêu chí chấm điểm."]].map(([i,t,d])=><article key={t}><span>{i}</span><h3>{t}</h3><strong>01 giải / bảng tuổi</strong><p>{d}</p></article>)}</div><div className="container special"><h3>8 GIẢI THƯỞNG ĐẶC BIỆT</h3>{["Đổi mới sáng tạo","AI xuất sắc","Tác động xã hội","Nguyên mẫu tốt nhất","Thuyết trình xuất sắc","Đội được yêu thích","Cố vấn xuất sắc","Trường học xuất sắc"].map(x=><span key={x}>✦ {x}</span>)}</div><div className="container certificate"><p>Tất cả thí sinh đều nhận</p><h3>CHỨNG NHẬN QUỐC TẾ</h3><p>Ghi nhận hành trình, năng lực sáng tạo và tinh thần hội nhập quốc tế của mỗi thí sinh tại ANGC.</p></div></section>

    <section className="section alt" id="dang-ky"><Heading eye="Lệ phí tham dự" title="AI Tech 4 Good tại ANGC 2026"/><div className="container fee"><span className="badge">Thi đấu theo đội</span><p>Dành cho học sinh từ 13 tuổi · Đội 3–5 thành viên + 1–2 cố vấn</p><h3>LỆ PHÍ THAM DỰ</h3><strong>$18</strong><small>mỗi học sinh</small><p>Một đội 3–5 học sinh đóng tổng cộng <b>$54–$90</b>.</p><a className="button primary" href="https://forms.gle/Z7CTcQWVJyEFzAun6" target="_blank" rel="noreferrer">Đăng ký ngay <Arrow/></a></div></section>

    <section className="section" id="lich-trinh"><Heading eye="Lịch mùa giải" title="Lộ trình Phát triển & Thuyết trình 2026" lead="Năm giai đoạn từ phiên giới thiệu đến chung kết quốc tế tại Đà Nẵng. Vui lòng đối chiếu ngày với thông báo chính thức ANGC 2026."/><div className="container timeline">{timeline.map(([date,mode,title,text],i)=><article key={date}><b>{i+1}</b><div><span>{date}</span><em>{mode}</em><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="section cream"><Heading eye="Sau vòng chung kết quốc tế" title="Cơ hội thi đấu trong suốt năm" lead="Các giải đấu quốc gia và quốc tế trong hệ sinh thái STEAM của LYDINC."/><div className="container opportunities">{opportunities.map(([flag,date,title])=><article key={date}><span>{flag}</span><div><small>{date}</small><h3>{title}</h3></div><b>ANGC</b></article>)}</div><div className="center action-space"><a className="button primary" href="https://www.lydinc.net/services/steam-education/steam-international-competitions-eng" target="_blank" rel="noreferrer">Khám phá ngay <Arrow/></a></div></section>

    <section className="section"><Heading eye="Miễn phí cho mọi đội" title="Thư viện tài nguyên ANGC 2026" lead="Tài liệu hướng dẫn, video đào tạo và nền tảng học tập chính thức giúp đội thi bắt đầu mà không mất phí."/><div className="container resources">{[["📄","Tài liệu hướng dẫn"],["▶","Video đào tạo"],["📚","Nền tảng học tập"],["🌐","Website tài nguyên"]].map(([i,t])=><article key={t}><span>{i}</span><h3>{t}</h3></article>)}</div></section>

    <section className="section alt"><Heading eye="Ngoài Phát triển & Thuyết trình" title="Khám phá các mô-đun khác" lead="ANGC 2026 có thêm năm mô-đun; học sinh có thể đăng ký một hoặc nhiều mô-đun cùng lúc."/><div className="container modules">{modules.map(([id,tag,title])=><article key={id}><a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer"><img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={tag}/><span>▶</span></a><small>Mô-đun: {tag}</small><h3>{title}</h3></article>)}</div></section>

    <section className="section contact" id="lien-he"><div className="container contact-panel"><div><p className="eyebrow light">Bạn cần hỗ trợ?</p><h2>ĐỘI NGŨ TƯ VẤN PHÁT TRIỂN & THUYẾT TRÌNH</h2><p>Trao đổi với chúng tôi trước khi đăng ký. Đội ngũ hỗ trợ học sinh, giáo viên, phụ huynh và trường đối tác trong ngày làm việc.</p>{["Thành lập đội và chọn bảng tuổi","Các bước đăng ký, lệ phí, thời hạn","Công cụ AI, dữ liệu và tài liệu đào tạo","Yêu cầu đề xuất, nguyên mẫu và thuyết trình"].map(x=><p className="contact-point" key={x}><Tick/>{x}</p>)}</div><div className="contact-card"><h3>Kênh liên hệ</h3><a href="tel:+84899001168"><span>☎</span><div><small>Hotline</small><b>089 900 11 68</b></div></a><a href="mailto:contact@lydinc.net"><span>✉</span><div><small>Email</small><b>contact@lydinc.net</b></div></a><a href="https://maps.app.goo.gl/yQfbWXeqpb6y1rPg9" target="_blank" rel="noreferrer"><span>⌖</span><div><small>Văn phòng</small><b>Tầng 3, 53 Nguyễn Chí Thanh, Đà Nẵng</b></div></a><div className="contact-actions"><a className="button primary" href="https://zalo.me/g/u8gec5kk6wu1xgc7p4js" target="_blank" rel="noreferrer">Tham gia nhóm Zalo</a><a className="button outline" href="https://zalo.me/0899001168" target="_blank" rel="noreferrer">Liên hệ LYDINC</a></div></div></div></section>
    <footer><div className="container"><strong>AI TECH4GOOD · ANGC 2026</strong><span>© 2026 LYDINC. Kết nối công nghệ với những điều tốt đẹp.</span><a href="#">Về đầu trang ↑</a></div></footer>
  </main>;
}
