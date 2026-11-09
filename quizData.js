// Kho câu hỏi theo từng chặng. Khóa là "id" của chặng trong lessons.json.
// Mỗi câu gồm: question (câu hỏi), options (đúng 3 đáp án A, B, C),
// answer (vị trí đáp án đúng: 0 = A, 1 = B, 2 = C), explanation (giải thích hiện sau khi trả lời).
// Mỗi lượt chơi game tự rút ngẫu nhiên 10 câu và xáo thứ tự đáp án.
const quizData = {
  // Chặng 1: Lịch sử tư tưởng
  1: [
    {
      question: "Trường phái nào coi vàng bạc là của cải thật sự?",
      options: ["Trọng nông", "Trọng thương", "Cổ điển Anh"],
      answer: 1,
      explanation: "Trọng thương muốn xuất siêu để thu về vàng bạc."
    },
    {
      question: "Quyển I bộ Tư bản của Marx xuất bản năm nào?",
      options: ["1848", "1917", "1867"],
      answer: 2,
      explanation: "Năm 1867. Quyển II và III do Engels hoàn thiện sau đó."
    },
    {
      question: "Phái trọng nông cho rằng ngành nào tạo ra sản phẩm ròng?",
      options: ["Công nghiệp", "Nông nghiệp", "Thương mại"],
      answer: 1,
      explanation: "Quesnay coi nông nghiệp là nguồn duy nhất của sản phẩm ròng."
    },
    {
      question: "Tác giả của Của cải của các quốc gia (1776) là ai?",
      options: ["Adam Smith", "David Ricardo", "Karl Marx"],
      answer: 0,
      explanation: "Adam Smith là đại biểu lớn của kinh tế chính trị cổ điển Anh."
    },
    {
      question: "Ai là đại biểu tiêu biểu của phái trọng nông Pháp?",
      options: ["William Petty", "François Quesnay", "Thomas Mun"],
      answer: 1,
      explanation: "Quesnay cho rằng nông nghiệp tạo ra sản phẩm ròng."
    },
    {
      question: "Phái cổ điển Anh gắn giá trị hàng hóa với yếu tố nào?",
      options: ["Lao động", "Vàng bạc", "Đất đai"],
      answer: 0,
      explanation: "Smith, Petty, Ricardo đều tìm nguồn gốc giá trị ở lao động."
    },
    {
      question: "Marx kế thừa trường phái nào khi xây dựng học thuyết giá trị thặng dư?",
      options: ["Trọng thương", "Cổ điển Anh", "Trọng nông"],
      answer: 1,
      explanation: "Marx kế thừa có phê phán những thành tựu của kinh tế chính trị cổ điển Anh."
    },
    {
      question: "Ai hoàn thiện và xuất bản quyển II và III bộ Tư bản sau khi Marx mất?",
      options: ["Lenin", "Ricardo", "Engels"],
      answer: 2,
      explanation: "Engels biên tập di cảo của Marx để xuất bản."
    },
    {
      question: "Karl Marx sinh năm nào?",
      options: ["1818", "1820", "1848"],
      answer: 0,
      explanation: "Marx sinh năm 1818 và mất năm 1883."
    },
    {
      question: "Phái nào cho rằng của cải của quốc gia là vàng bạc và đề cao xuất siêu?",
      options: ["Trọng nông", "Cổ điển Anh", "Trọng thương"],
      answer: 2,
      explanation: "Trọng thương coi tiền tệ, vàng bạc là của cải thật sự."
    },
    {
      question: "Thuật ngữ kinh tế chính trị lần đầu được nêu ra năm 1615 bởi ai?",
      options: ["Antoine de Montchrétien", "Adam Smith", "Karl Marx"],
      answer: 0,
      explanation: "Ông dùng cụm từ này trong một tác phẩm về kinh tế chính trị xuất bản năm 1615."
    },
    {
      question: "Thomas Mun là đại biểu của trường phái nào?",
      options: ["Trọng nông", "Trọng thương", "Cổ điển Anh"],
      answer: 1,
      explanation: "Mun là nhà trọng thương người Anh, đề cao ngoại thương và xuất siêu."
    },
    {
      question: "Ai được Marx coi là người sáng lập kinh tế chính trị học cổ điển Anh?",
      options: ["Thomas Mun", "François Quesnay", "William Petty"],
      answer: 2,
      explanation: "Petty là người đầu tiên nghiên cứu giá trị gắn với lao động."
    },
    {
      question: "Phái trọng nông ra đời ở nước nào?",
      options: ["Anh", "Pháp", "Đức"],
      answer: 1,
      explanation: "Quesnay và các môn đồ hoạt động chủ yếu ở Pháp vào thế kỷ XVIII."
    },
    {
      question: "Biểu kinh tế (1758) của Quesnay mô tả điều gì?",
      options: ["Cách nhà nước thu thuế", "Giá vàng trên thị trường", "Quá trình tái sản xuất và lưu thông sản phẩm xã hội"],
      answer: 2,
      explanation: "Đây là mô hình đầu tiên về tái sản xuất toàn bộ nền kinh tế."
    },
    {
      question: "Khái niệm bàn tay vô hình của Adam Smith nói về điều gì?",
      options: ["Thị trường tự điều tiết thông qua lợi ích cá nhân", "Nhà nước chỉ huy mọi giao dịch", "Vàng bạc quyết định giá cả"],
      answer: 0,
      explanation: "Mỗi người theo đuổi lợi ích riêng nhưng thị trường điều phối chung như có bàn tay vô hình."
    },
    {
      question: "Theo Smith, của cải của một quốc gia chủ yếu do đâu mà có?",
      options: ["Chỉ từ nông nghiệp", "Lao động trong mọi ngành sản xuất", "Chỉ từ xuất khẩu vàng bạc"],
      answer: 1,
      explanation: "Smith mở rộng nguồn của cải sang lao động trong mọi ngành."
    },
    {
      question: "Smith lấy ví dụ nào để minh họa lợi ích của phân công lao động?",
      options: ["Xưởng đóng tàu", "Mỏ than", "Xưởng sản xuất đinh ghim"],
      answer: 2,
      explanation: "Chia nhỏ công đoạn làm tăng mạnh năng suất của mỗi công nhân."
    },
    {
      question: "Lý thuyết lợi thế so sánh trong thương mại quốc tế gắn với tên tuổi nào?",
      options: ["Adam Smith", "David Ricardo", "François Quesnay"],
      answer: 1,
      explanation: "Ricardo chỉ ra các nước đều có lợi khi chuyên môn hóa theo lợi thế so sánh."
    },
    {
      question: "Theo Ricardo, khi tiền lương tăng thì lợi nhuận thường thế nào?",
      options: ["Tăng theo", "Không liên quan", "Giảm đi"],
      answer: 2,
      explanation: "Ricardo cho rằng tiền lương và lợi nhuận vận động ngược chiều."
    }
  ],

  // Chặng 2: Hàng hóa và tiền
  2: [
    {
      question: "Rau trồng để tự ăn có phải hàng hóa không?",
      options: ["Có, vì ăn được", "Không, vì không làm ra để bán", "Có, vì do lao động tạo ra"],
      answer: 1,
      explanation: "Hàng hóa phải được làm ra để trao đổi, mua bán."
    },
    {
      question: "Giá cả là gì?",
      options: ["Giá trị biểu hiện bằng tiền", "Số tiền trong ví", "Chi phí vận chuyển"],
      answer: 0,
      explanation: "Giá cả là hình thức biểu hiện bằng tiền của giá trị."
    },
    {
      question: "Hàng hóa có hai thuộc tính nào?",
      options: ["Giá cả và lợi nhuận", "Cung và cầu", "Giá trị sử dụng và giá trị"],
      answer: 2,
      explanation: "Giá trị sử dụng là công dụng, giá trị là lao động xã hội kết tinh."
    },
    {
      question: "Lượng giá trị hàng hóa do yếu tố nào quyết định?",
      options: ["Thời gian lao động xã hội cần thiết", "Thời gian lao động cá biệt", "Giá bán trên thị trường"],
      answer: 0,
      explanation: "Đó là thời gian lao động xã hội cần thiết để sản xuất hàng hóa."
    },
    {
      question: "Chức năng đo giá trị của các hàng hóa khác là chức năng nào của tiền?",
      options: ["Thước đo giá trị", "Phương tiện cất trữ", "Phương tiện thanh toán"],
      answer: 0,
      explanation: "Tiền làm thước đo để biểu hiện giá trị của hàng hóa khác."
    },
    {
      question: "Giá trị sử dụng của hàng hóa là gì?",
      options: ["Lao động xã hội kết tinh", "Công dụng thỏa mãn nhu cầu", "Số tiền bán được"],
      answer: 1,
      explanation: "Giá trị sử dụng là công dụng của vật, thỏa mãn một nhu cầu của con người."
    },
    {
      question: "Lao động cụ thể tạo ra yếu tố nào của hàng hóa?",
      options: ["Giá trị", "Giá cả", "Giá trị sử dụng"],
      answer: 2,
      explanation: "Lao động cụ thể tạo giá trị sử dụng, lao động trừu tượng tạo giá trị."
    },
    {
      question: "Năng suất lao động tăng thì lượng giá trị của một đơn vị hàng hóa thay đổi thế nào?",
      options: ["Tăng", "Giảm", "Không đổi"],
      answer: 1,
      explanation: "Cùng thời gian làm ra nhiều hàng hóa hơn nên giá trị một đơn vị giảm."
    },
    {
      question: "Cất giữ tiền để dùng về sau là chức năng nào của tiền?",
      options: ["Tiền tệ thế giới", "Phương tiện lưu thông", "Phương tiện cất trữ"],
      answer: 2,
      explanation: "Tiền rút khỏi lưu thông để dành là phương tiện cất trữ."
    },
    {
      question: "Quy luật giá trị yêu cầu trao đổi hàng hóa dựa trên cơ sở nào?",
      options: ["Giá cao nhất", "Hao phí lao động xã hội cần thiết (ngang giá)", "Ý muốn của người bán"],
      answer: 1,
      explanation: "Trao đổi phải theo nguyên tắc ngang giá."
    },
    {
      question: "Lao động sản xuất hàng hóa có tính hai mặt nào?",
      options: ["Lao động cụ thể và lao động trừu tượng", "Lao động chân tay và lao động trí óc", "Lao động tư nhân và lao động nhà nước"],
      answer: 0,
      explanation: "Marx là người đầu tiên phát hiện tính hai mặt của lao động sản xuất hàng hóa."
    },
    {
      question: "Lao động trừu tượng là gì?",
      options: ["Việc làm ra một loại sản phẩm cụ thể", "Sự hao phí sức lực nói chung của con người, tạo ra giá trị", "Công việc không có ích"],
      answer: 1,
      explanation: "Lao động trừu tượng là cơ sở tạo ra giá trị của hàng hóa."
    },
    {
      question: "Giá trị sử dụng của hàng hóa chỉ được thể hiện khi nào?",
      options: ["Khi sản xuất", "Khi rao bán", "Khi sử dụng hay tiêu dùng"],
      answer: 2,
      explanation: "Công dụng của vật chỉ bộc lộ trong quá trình sử dụng."
    },
    {
      question: "Giá trị trao đổi là gì?",
      options: ["Tỷ lệ về lượng khi đổi giá trị sử dụng này lấy giá trị sử dụng khác", "Số tiền trong ví", "Chi phí vận chuyển"],
      answer: 0,
      explanation: "Giá trị trao đổi là hình thức biểu hiện của giá trị."
    },
    {
      question: "Cường độ lao động tăng lên thì giá trị của một đơn vị hàng hóa thay đổi thế nào?",
      options: ["Tăng", "Không đổi, nhưng tổng giá trị tạo ra tăng", "Giảm"],
      answer: 1,
      explanation: "Lao động khẩn trương hơn tạo ra nhiều sản phẩm hơn trong cùng thời gian nên tổng giá trị tăng."
    },
    {
      question: "Trong cùng một thời gian, lao động phức tạp so với lao động giản đơn thì thế nào?",
      options: ["Tạo ra ít giá trị hơn", "Tạo ra giá trị bằng nhau", "Tạo ra nhiều giá trị hơn"],
      answer: 2,
      explanation: "Lao động phức tạp được coi là lao động giản đơn được nhân lên."
    },
    {
      question: "Sản xuất hàng hóa ra đời khi có điều kiện nào?",
      options: ["Phân công lao động xã hội và sự tách biệt về kinh tế giữa các chủ thể", "Chỉ cần có tiền", "Chỉ cần có nhà nước"],
      answer: 0,
      explanation: "Hai điều kiện này cùng tồn tại thì mới có sản xuất hàng hóa."
    },
    {
      question: "Trong công thức H–T–H, tiền đóng vai trò gì?",
      options: ["Phương tiện cất trữ", "Môi giới trao đổi (phương tiện lưu thông)", "Tiền tệ thế giới"],
      answer: 1,
      explanation: "Tiền chỉ làm trung gian để đổi hàng này lấy hàng khác."
    },
    {
      question: "Dùng tiền để trả nợ, nộp thuế là chức năng nào của tiền?",
      options: ["Thước đo giá trị", "Phương tiện cất trữ", "Phương tiện thanh toán"],
      answer: 2,
      explanation: "Tiền thực hiện việc chi trả, không nhất thiết đi kèm giao hàng cùng lúc."
    },
    {
      question: "Dùng tiền để thanh toán giữa các quốc gia là chức năng nào?",
      options: ["Tiền tệ thế giới", "Phương tiện cất trữ", "Thước đo giá trị"],
      answer: 0,
      explanation: "Chức năng này đòi hỏi tiền có giá trị quốc tế được thừa nhận."
    }
  ],

  // Chặng 3: Giá trị thặng dư
  3: [
    {
      question: "Giá trị thặng dư là gì?",
      options: ["Phần giá trị mới dôi ra ngoài giá trị sức lao động, bị chủ chiếm", "Tiền lương của công nhân", "Chi phí mua máy móc"],
      answer: 0,
      explanation: "Đó là phần lao động không công của công nhân."
    },
    {
      question: "Làm 12 giờ, trong đó 6 giờ bù lương. Tỷ suất giá trị thặng dư là bao nhiêu?",
      options: ["50%", "200%", "100%"],
      answer: 2,
      explanation: "m chia v = 6 giờ chia 6 giờ = 100%."
    },
    {
      question: "Kéo dài ngày lao động để tăng giá trị thặng dư là phương pháp nào?",
      options: ["Tuyệt đối", "Tương đối", "Siêu ngạch"],
      answer: 0,
      explanation: "Tuyệt đối: kéo dài ngày làm. Tương đối: rút ngắn thời gian lao động tất yếu."
    },
    {
      question: "Tư bản bất biến (c) là phần tư bản nào?",
      options: ["Dùng để mua sức lao động", "Tồn tại dưới dạng tư liệu sản xuất, giá trị chuyển vào sản phẩm", "Dùng để trả lãi vay"],
      answer: 1,
      explanation: "Máy móc, nguyên liệu chỉ chuyển giá trị của chúng vào sản phẩm."
    },
    {
      question: "Tư bản khả biến (v) dùng để làm gì?",
      options: ["Mua máy móc", "Mua nguyên liệu", "Mua sức lao động"],
      answer: 2,
      explanation: "Phần này tăng lên về giá trị trong quá trình sản xuất."
    },
    {
      question: "Giá trị thặng dư do yếu tố nào tạo ra?",
      options: ["Lao động của công nhân làm thuê", "Máy móc", "Tiền vốn"],
      answer: 0,
      explanation: "Chỉ có sức lao động mới tạo ra giá trị lớn hơn giá trị của nó."
    },
    {
      question: "Công thức tính tỷ suất giá trị thặng dư là gì?",
      options: ["v chia m", "m chia c", "m chia v"],
      answer: 2,
      explanation: "m' = m/v x 100%."
    },
    {
      question: "Sản xuất giá trị thặng dư tương đối dựa vào điều gì?",
      options: ["Kéo dài ngày lao động", "Rút ngắn thời gian lao động tất yếu nhờ tăng năng suất", "Giảm lương xuống dưới giá trị sức lao động"],
      answer: 1,
      explanation: "Ngày lao động không đổi, nhưng phần lao động cho nhà tư bản dài ra."
    },
    {
      question: "Giá trị thặng dư siêu ngạch là gì?",
      options: ["Toàn bộ lợi nhuận", "Phần dôi ra ngoài thặng dư thông thường nhờ giá trị cá biệt thấp hơn giá trị xã hội", "Tiền thưởng của công nhân"],
      answer: 1,
      explanation: "Doanh nghiệp áp dụng kỹ thuật mới sớm sẽ thu được phần này."
    },
    {
      question: "Giá trị của hàng hóa gồm những bộ phận nào?",
      options: ["c + v", "c + v + m", "v + m"],
      answer: 1,
      explanation: "W = c + v + m."
    },
    {
      question: "Giá trị sử dụng đặc biệt của hàng hóa sức lao động là gì?",
      options: ["Tạo ra giá trị lớn hơn giá trị của bản thân nó", "Bền hơn máy móc", "Rẻ hơn nguyên liệu"],
      answer: 0,
      explanation: "Đây là chìa khóa để giải thích nguồn gốc của giá trị thặng dư."
    },
    {
      question: "Điều kiện để sức lao động trở thành hàng hóa là gì?",
      options: ["Người lao động sở hữu nhà máy", "Người lao động tự do về thân thể và không có tư liệu sản xuất", "Người lao động bị cưỡng bức làm việc"],
      answer: 1,
      explanation: "Họ có quyền bán sức lao động và buộc phải bán để sống."
    },
    {
      question: "Giá trị hàng hóa sức lao động được xác định bằng giá trị của gì?",
      options: ["Lợi nhuận của nhà tư bản", "Giá máy móc", "Tư liệu sinh hoạt cần thiết để tái sản xuất sức lao động"],
      answer: 2,
      explanation: "Gồm cả nhu cầu của gia đình người lao động và chi phí học tập, đào tạo."
    },
    {
      question: "Tiền công trong chủ nghĩa tư bản thực chất là gì?",
      options: ["Giá cả của hàng hóa sức lao động", "Một phần lợi nhuận", "Quà tặng của nhà tư bản"],
      answer: 0,
      explanation: "Bề ngoài tiền công như giá cả của lao động nhưng thực chất là giá cả sức lao động."
    },
    {
      question: "Ngày làm 10 giờ, trong đó 4 giờ là lao động tất yếu. Tỷ suất giá trị thặng dư là bao nhiêu?",
      options: ["40%", "150%", "250%"],
      answer: 1,
      explanation: "m = 6 giờ, v = 4 giờ nên m' = 6/4 = 150%."
    },
    {
      question: "Với m = 200 và v = 100, tỷ suất giá trị thặng dư là bao nhiêu?",
      options: ["50%", "100%", "200%"],
      answer: 2,
      explanation: "m' = m/v = 200/100 = 200%."
    },
    {
      question: "Tỷ suất giá trị thặng dư 100%, tổng tư bản khả biến 500 thì khối lượng giá trị thặng dư là bao nhiêu?",
      options: ["100", "500", "5000"],
      answer: 1,
      explanation: "M = m' x V = 1 x 500 = 500."
    },
    {
      question: "Tích lũy tư bản là gì?",
      options: ["Cất tiền vào két sắt", "Vay thêm tiền ngân hàng", "Chuyển một phần giá trị thặng dư thành tư bản"],
      answer: 2,
      explanation: "Còn gọi là tư bản hóa giá trị thặng dư."
    },
    {
      question: "Tích tụ tư bản làm tăng quy mô tư bản cá biệt bằng cách nào?",
      options: ["Hợp nhất các tư bản có sẵn", "Tư bản hóa một phần giá trị thặng dư", "Nhà nước cấp vốn"],
      answer: 1,
      explanation: "Còn tập trung tư bản là hợp nhất các tư bản đã có."
    },
    {
      question: "Cấu tạo hữu cơ của tư bản là gì?",
      options: ["Tỷ lệ giữa tư bản bất biến và tư bản khả biến, do cấu tạo kỹ thuật quyết định", "Tỷ lệ lãi vay", "Tỷ lệ thuế"],
      answer: 0,
      explanation: "Ký hiệu c : v, phản ánh trình độ kỹ thuật."
    }
  ],

  // Chặng 4: Độc quyền
  4: [
    {
      question: "Hình thức độc quyền thống nhất cả sản xuất và lưu thông dưới một hội đồng quản trị là gì?",
      options: ["Cartel", "Syndicate", "Trust"],
      answer: 2,
      explanation: "Đó là Trust, như Standard Oil của Rockefeller."
    },
    {
      question: "Theo Lenin, tư bản tài chính là sự hợp nhất của gì?",
      options: ["Thương nhân và địa chủ", "Tư bản ngân hàng và tư bản công nghiệp", "Nhà nước và công đoàn"],
      answer: 1,
      explanation: "Tư bản ngân hàng độc quyền hợp nhất với tư bản của các liên minh công nghiệp độc quyền."
    },
    {
      question: "Độc quyền hình thành chủ yếu từ nguyên nhân nào?",
      options: ["Nhà nước cấm cạnh tranh", "Người tiêu dùng yêu cầu", "Lực lượng sản xuất phát triển, cạnh tranh và khủng hoảng"],
      answer: 2,
      explanation: "Cạnh tranh dẫn tới tập trung, khủng hoảng làm hãng nhỏ phá sản hoặc bị thâu tóm."
    },
    {
      question: "Cartel là hình thức độc quyền như thế nào?",
      options: ["Thỏa thuận về giá, sản lượng, thị trường nhưng các thành viên vẫn độc lập", "Sáp nhập hoàn toàn thành một công ty", "Liên kết nhiều ngành khác nhau"],
      answer: 0,
      explanation: "Thành viên vẫn độc lập về sản xuất và thương mại."
    },
    {
      question: "Lenin nêu bao nhiêu đặc điểm của chủ nghĩa đế quốc?",
      options: ["3", "5", "7"],
      answer: 1,
      explanation: "Có 5 đặc điểm cơ bản."
    },
    {
      question: "Xuất khẩu tư bản là gì?",
      options: ["Bán hàng hóa ra nước ngoài", "Cho nước ngoài vay hàng hóa", "Đưa tư bản ra nước ngoài đầu tư để thu lợi nhuận cao"],
      answer: 2,
      explanation: "Khác với xuất khẩu hàng hóa, đây là đưa chính tư bản ra ngoài."
    },
    {
      question: "Syndicate thống nhất khâu nào của các xí nghiệp thành viên?",
      options: ["Sản xuất", "Lưu thông (mua nguyên liệu, bán hàng)", "Nghiên cứu khoa học"],
      answer: 1,
      explanation: "Thành viên vẫn tự sản xuất nhưng mua bán qua ban quản trị chung."
    },
    {
      question: "Đặc điểm nào đúng với chủ nghĩa đế quốc theo Lenin?",
      options: ["Tự do cạnh tranh chiếm ưu thế tuyệt đối", "Các liên minh độc quyền quốc tế phân chia thị trường thế giới", "Tư bản tài chính biến mất"],
      answer: 1,
      explanation: "Các tổ chức độc quyền quốc tế chia nhau thị trường toàn cầu."
    },
    {
      question: "Lenin viết tác phẩm Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản vào năm nào?",
      options: ["1905", "1916", "1924"],
      answer: 1,
      explanation: "Tác phẩm hoàn thành năm 1916."
    },
    {
      question: "Hình thức độc quyền liên kết nhiều ngành khác nhau trong một tập đoàn lớn là gì?",
      options: ["Cartel", "Syndicate", "Conglomerate"],
      answer: 2,
      explanation: "Conglomerate là tập đoàn đa ngành."
    },
    {
      question: "Đặc điểm thứ năm của chủ nghĩa đế quốc theo Lenin là gì?",
      options: ["Các cường quốc tư bản đã phân chia xong lãnh thổ thế giới", "Tự do cạnh tranh hoàn toàn", "Xóa bỏ ngân hàng"],
      answer: 0,
      explanation: "Đây là đặc điểm về sự phân chia lãnh thổ giữa các cường quốc."
    },
    {
      question: "Đầu sỏ tài chính là gì?",
      options: ["Mọi cổ đông nhỏ", "Một nhóm nhỏ tư bản tài chính chi phối toàn bộ đời sống kinh tế và chính trị", "Công nhân ngân hàng"],
      answer: 1,
      explanation: "Họ nắm các tổ chức độc quyền và chi phối cả bộ máy nhà nước."
    },
    {
      question: "Consortium là hình thức độc quyền như thế nào?",
      options: ["Hai cửa hàng nhỏ liên kết", "Một hợp tác xã nông nghiệp", "Liên minh nhiều ngân hàng và xí nghiệp nhiều ngành cùng thực hiện dự án lớn"],
      answer: 2,
      explanation: "Đây là hình thức liên kết đa ngành, do một nhóm tư bản tài chính chi phối."
    },
    {
      question: "Sau khi độc quyền xuất hiện, cạnh tranh trong xã hội tư bản thế nào?",
      options: ["Biến mất hoàn toàn", "Vẫn tồn tại và gay gắt hơn", "Chỉ còn trong nông nghiệp"],
      answer: 1,
      explanation: "Độc quyền không xóa bỏ được cạnh tranh mà làm cạnh tranh thêm phức tạp."
    },
    {
      question: "Giá cả độc quyền được định như thế nào?",
      options: ["Cao khi bán và thấp khi mua để thu lợi nhuận độc quyền", "Luôn bằng giá trị", "Luôn thấp hơn giá trị"],
      answer: 0,
      explanation: "Nhờ vị thế thống trị nên các tổ chức độc quyền áp đặt được giá."
    },
    {
      question: "Lợi nhuận độc quyền là gì?",
      options: ["Lợi nhuận thấp hơn bình quân", "Lợi nhuận bằng không", "Lợi nhuận cao hơn lợi nhuận bình quân"],
      answer: 2,
      explanation: "Đây là lợi nhuận thu được nhờ vị thế độc quyền."
    },
    {
      question: "Độc quyền nhà nước là sự kết hợp nào?",
      options: ["Sức mạnh của tổ chức độc quyền với sức mạnh của nhà nước", "Công đoàn với doanh nghiệp nhỏ", "Nông dân với địa chủ"],
      answer: 0,
      explanation: "Nhà nước tư sản phục vụ lợi ích của các tổ chức độc quyền."
    },
    {
      question: "Chủ nghĩa tư bản độc quyền nhà nước phản ánh yêu cầu nào?",
      options: ["Quay về sản xuất nhỏ", "Xã hội hóa lực lượng sản xuất ngày càng cao", "Xóa bỏ khoa học kỹ thuật"],
      answer: 1,
      explanation: "Quy mô sản xuất lớn đòi hỏi sự điều tiết chung của nhà nước."
    },
    {
      question: "Biểu hiện nào thể hiện độc quyền nhà nước?",
      options: ["Nhà nước cấm mọi doanh nghiệp", "Nhà nước bỏ mọi chính sách", "Nhà nước điều tiết kinh tế bằng thuế, tài chính, tiền tệ"],
      answer: 2,
      explanation: "Nhà nước dùng công cụ kinh tế để điều tiết theo lợi ích của tư bản lớn."
    },
    {
      question: "Standard Oil gắn với tên tuổi nhà tư bản nào?",
      options: ["Henry Ford", "John D. Rockefeller", "Andrew Carnegie"],
      answer: 1,
      explanation: "Standard Oil là ví dụ điển hình của Trust trong ngành dầu mỏ."
    }
  ],

  // Chặng 5: Cung cầu và giá trị
  5: [
    {
      question: "Cầu lớn hơn cung thì giá thường thế nào?",
      options: ["Tăng", "Giảm", "Không đổi"],
      answer: 0,
      explanation: "Người mua tranh nhau nên giá bị đẩy lên."
    },
    {
      question: "Giá cao hơn giá trị kéo dài sẽ dẫn đến điều gì?",
      options: ["Cầu tăng mãi mãi", "Nhà nước phải ngừng bán", "Nhiều người đổ vào sản xuất, cung tăng"],
      answer: 2,
      explanation: "Sản xuất có lãi thu hút thêm người làm, cung tăng và kéo giá xuống."
    },
    {
      question: "Giá trị hàng hóa do yếu tố nào quyết định?",
      options: ["Số tiền người mua sẵn lòng trả", "Lao động xã hội cần thiết", "Chi phí vận chuyển"],
      answer: 1,
      explanation: "Lượng giá trị do thời gian lao động xã hội cần thiết quyết định."
    },
    {
      question: "Ricardo xuất bản Nguyên lý kinh tế chính trị và thuế khóa vào năm nào?",
      options: ["1776", "1817", "1867"],
      answer: 1,
      explanation: "Tác phẩm ra đời năm 1817."
    },
    {
      question: "Cung lớn hơn cầu thì giá cả thường thế nào?",
      options: ["Tăng", "Không đổi", "Giảm"],
      answer: 2,
      explanation: "Hàng nhiều hơn người mua nên người bán phải hạ giá."
    },
    {
      question: "Giá cả thị trường lên xuống xoay quanh yếu tố nào?",
      options: ["Chi phí vận chuyển", "Giá trị", "Lợi nhuận kỳ vọng"],
      answer: 1,
      explanation: "Giá cả là biểu hiện bằng tiền của giá trị và dao động quanh nó."
    },
    {
      question: "Quy luật giá trị điều tiết lĩnh vực nào?",
      options: ["Chỉ phân phối thu nhập", "Sản xuất và lưu thông hàng hóa", "Chỉ tiền lương"],
      answer: 1,
      explanation: "Nó điều tiết việc phân bổ nguồn lực và trao đổi hàng hóa."
    },
    {
      question: "Khi cung bằng cầu thì giá cả thường như thế nào?",
      options: ["Phù hợp với giá trị", "Bằng không", "Tăng gấp đôi"],
      answer: 0,
      explanation: "Lúc đó giá cả phản ánh đúng giá trị hàng hóa."
    },
    {
      question: "Người có hao phí lao động cá biệt thấp hơn mức xã hội cần thiết sẽ ra sao?",
      options: ["Bị lỗ", "Hòa vốn", "Có lãi"],
      answer: 2,
      explanation: "Họ bán theo giá trị xã hội nhưng chi phí thấp hơn."
    },
    {
      question: "Ricardo thuộc trường phái kinh tế nào?",
      options: ["Trọng nông", "Trọng thương", "Cổ điển Anh"],
      answer: 2,
      explanation: "Ricardo là đại biểu xuất sắc của trường phái cổ điển Anh."
    },
    {
      question: "Cầu là gì?",
      options: ["Nhu cầu có khả năng thanh toán về hàng hóa, dịch vụ", "Mong muốn bất kỳ nhưng không có tiền", "Số hàng hóa người bán đang có"],
      answer: 0,
      explanation: "Cầu gắn với khả năng thanh toán chứ không chỉ là mong muốn."
    },
    {
      question: "Cung là gì?",
      options: ["Số tiền người mua có", "Khối lượng hàng hóa có thể đưa ra bán ở mức giá nhất định", "Nhu cầu của xã hội"],
      answer: 1,
      explanation: "Cung phụ thuộc vào khả năng sản xuất và mức giá."
    },
    {
      question: "Khi các yếu tố khác không đổi, giá tăng thì lượng cầu thường thế nào?",
      options: ["Tăng", "Không đổi", "Giảm"],
      answer: 2,
      explanation: "Giá cao làm người mua giảm bớt lượng mua."
    },
    {
      question: "Khi các yếu tố khác không đổi, giá tăng thì lượng cung thường thế nào?",
      options: ["Tăng", "Giảm", "Không đổi"],
      answer: 0,
      explanation: "Giá cao làm người bán muốn bán nhiều hơn."
    },
    {
      question: "Giá cân bằng xuất hiện khi nào?",
      options: ["Cung gấp đôi cầu", "Cung bằng cầu", "Cầu bằng không"],
      answer: 1,
      explanation: "Tại điểm này lượng cung và lượng cầu bằng nhau."
    },
    {
      question: "Giá thấp hơn giá trị kéo dài thì người sản xuất sẽ làm gì?",
      options: ["Mở rộng sản xuất ồ ạt", "Tăng gấp đôi sản lượng", "Thu hẹp sản xuất hoặc chuyển sang ngành khác"],
      answer: 2,
      explanation: "Sản xuất không có lãi làm cung giảm và kéo giá lên lại."
    },
    {
      question: "Giá cả cung cấp cho người sản xuất và người tiêu dùng thông tin gì?",
      options: ["Tình hình cung cầu trên thị trường", "Thời tiết", "Lịch nghỉ lễ"],
      answer: 0,
      explanation: "Giá cả là tín hiệu giúp điều chỉnh quyết định sản xuất và tiêu dùng."
    },
    {
      question: "Quy luật giá trị biểu hiện hoạt động thông qua yếu tố nào?",
      options: ["Số dân", "Giá cả thị trường", "Diện tích đất"],
      answer: 1,
      explanation: "Giá cả lên xuống xoay quanh giá trị chính là hình thức hoạt động của quy luật giá trị."
    },
    {
      question: "Quy luật giá trị kích thích điều gì?",
      options: ["Lãng phí tài nguyên", "Ngừng sản xuất", "Cải tiến kỹ thuật, nâng cao năng suất lao động"],
      answer: 2,
      explanation: "Ai giảm được hao phí lao động cá biệt sẽ có lợi hơn."
    },
    {
      question: "Hàng hóa khan hiếm làm giá tăng cao sẽ có tác động gì?",
      options: ["Thu hút thêm người đầu tư sản xuất", "Khiến mọi người ngừng mua vĩnh viễn", "Khiến nhà nước thu hồi hàng"],
      answer: 0,
      explanation: "Lợi nhuận cao hút vốn và lao động vào ngành đó."
    }
  ],

  // Chặng 6: Kinh tế thị trường định hướng XHCN
  6: [
    {
      question: "Phân phối ở Việt Nam là chủ yếu theo cái gì?",
      options: ["Chia đều cho mọi người", "Kết quả lao động và hiệu quả kinh tế", "Tuổi tác"],
      answer: 1,
      explanation: "Đồng thời kết hợp với vốn, tài sản và phúc lợi xã hội."
    },
    {
      question: "Nhà nước điều hòa lợi ích bằng cách nào?",
      options: ["Cấm doanh nghiệp tư nhân", "Để mặc thị trường", "Thuế thu nhập lũy tiến và an sinh xã hội"],
      answer: 2,
      explanation: "Tăng trưởng phải gắn với tiến bộ và công bằng xã hội."
    },
    {
      question: "Thành phần kinh tế nào giữ vai trò chủ đạo?",
      options: ["Kinh tế nhà nước", "Kinh tế tư nhân", "Kinh tế có vốn nước ngoài"],
      answer: 0,
      explanation: "Kinh tế nhà nước giữ vai trò chủ đạo trong nền kinh tế nhiều thành phần."
    },
    {
      question: "Đại hội VI của Đảng mở đường cho Đổi mới vào năm nào?",
      options: ["1976", "1986", "1991"],
      answer: 1,
      explanation: "Năm 1986."
    },
    {
      question: "Đổi mới chuyển nền kinh tế sang cơ chế nào?",
      options: ["Kế hoạch hóa tập trung", "Tự cung tự cấp", "Thị trường có sự quản lý của Nhà nước"],
      answer: 2,
      explanation: "Đó là cơ chế thị trường có sự quản lý của Nhà nước."
    },
    {
      question: "Kinh tế tư nhân được xác định là gì?",
      options: ["Thành phần bị loại bỏ", "Một động lực quan trọng của nền kinh tế", "Thành phần chủ đạo"],
      answer: 1,
      explanation: "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng."
    },
    {
      question: "Nền kinh tế nhiều thành phần nghĩa là gì?",
      options: ["Chỉ có một hình thức sở hữu", "Chỉ có nhà nước và nước ngoài", "Nhiều hình thức sở hữu cùng tồn tại và phát triển"],
      answer: 2,
      explanation: "Các thành phần cùng hoạt động theo pháp luật."
    },
    {
      question: "Nhà nước quản lý nền kinh tế chủ yếu bằng công cụ nào?",
      options: ["Pháp luật, kế hoạch, chính sách", "Chỉ mệnh lệnh hành chính", "Không can thiệp gì"],
      answer: 0,
      explanation: "Nhà nước quản lý bằng pháp luật, chiến lược, quy hoạch, chính sách."
    },
    {
      question: "Nguyễn Văn Linh giữ chức vụ nào khi khởi xướng Đổi mới?",
      options: ["Thủ tướng", "Tổng Bí thư", "Chủ tịch nước"],
      answer: 1,
      explanation: "Ông là Tổng Bí thư từ năm 1986 đến 1991."
    },
    {
      question: "Một mục tiêu quan trọng của Đổi mới là gì?",
      options: ["Xóa bỏ kinh tế thị trường", "Đóng cửa với thế giới", "Giải phóng và phát triển lực lượng sản xuất"],
      answer: 2,
      explanation: "Đổi mới nhằm giải phóng sức sản xuất để dân giàu, nước mạnh."
    },
    {
      question: "Mục tiêu của kinh tế thị trường định hướng XHCN ở Việt Nam là gì?",
      options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Chỉ tăng lợi nhuận", "Chỉ đẩy mạnh xuất khẩu"],
      answer: 0,
      explanation: "Đây là mục tiêu tổng quát của mô hình kinh tế."
    },
    {
      question: "Cùng với kinh tế tập thể, thành phần nào là nền tảng của nền kinh tế quốc dân?",
      options: ["Kinh tế tư nhân", "Kinh tế nhà nước", "Kinh tế có vốn nước ngoài"],
      answer: 1,
      explanation: "Kinh tế nhà nước giữ vai trò chủ đạo và cùng kinh tế tập thể là nền tảng."
    },
    {
      question: "Ngoài phân phối theo lao động, Việt Nam còn có hình thức phân phối nào?",
      options: ["Chia đều tuyệt đối", "Phân phối theo tuổi", "Theo mức đóng góp vốn, nguồn lực khác và qua phúc lợi xã hội"],
      answer: 2,
      explanation: "Nhiều hình thức phân phối cùng tồn tại, trong đó phân phối theo lao động là chủ yếu."
    },
    {
      question: "Kinh tế thị trường định hướng XHCN gắn tăng trưởng với điều gì?",
      options: ["Tiến bộ và công bằng xã hội", "Chỉ tăng trưởng nhanh", "Bỏ qua phúc lợi"],
      answer: 0,
      explanation: "Tăng trưởng phải đi đôi với thực hiện tiến bộ và công bằng xã hội."
    },
    {
      question: "EVFTA là hiệp định thương mại tự do giữa Việt Nam và đối tác nào?",
      options: ["Hoa Kỳ", "Liên minh châu Âu", "Nhật Bản"],
      answer: 1,
      explanation: "EVFTA là hiệp định giữa Việt Nam và Liên minh châu Âu."
    },
    {
      question: "Đất đai ở Việt Nam thuộc hình thức sở hữu nào?",
      options: ["Sở hữu tư nhân hoàn toàn", "Sở hữu nước ngoài", "Sở hữu toàn dân do Nhà nước đại diện chủ sở hữu"],
      answer: 2,
      explanation: "Nhà nước giao đất, cho thuê đất và trao quyền sử dụng cho tổ chức, cá nhân."
    },
    {
      question: "Vai trò của Nhà nước trong kinh tế thị trường định hướng XHCN là gì?",
      options: ["Quản lý, điều tiết và khắc phục khuyết tật của thị trường", "Thay thế hoàn toàn thị trường", "Đứng ngoài nền kinh tế"],
      answer: 0,
      explanation: "Nhà nước tạo môi trường pháp lý và điều tiết để thị trường vận hành hiệu quả."
    },
    {
      question: "Ô nhiễm môi trường là biểu hiện của thất bại thị trường. Ai cần can thiệp?",
      options: ["Chỉ doanh nghiệp tự lo", "Nhà nước bằng pháp luật và chính sách", "Chỉ người tiêu dùng"],
      answer: 1,
      explanation: "Thị trường không tự giải quyết được ngoại ứng tiêu cực nên cần Nhà nước."
    },
    {
      question: "Điểm khác cơ bản so với kinh tế thị trường tư bản chủ nghĩa là gì?",
      options: ["Không có thị trường", "Không có doanh nghiệp tư nhân", "Gắn tăng trưởng với công bằng xã hội, vì con người"],
      answer: 2,
      explanation: "Mục tiêu hướng đến sự phát triển toàn diện của con người."
    },
    {
      question: "Khu vực có vốn đầu tư nước ngoài được xem là gì?",
      options: ["Thành phần bị loại bỏ", "Bộ phận cấu thành quan trọng của nền kinh tế", "Thành phần duy nhất"],
      answer: 1,
      explanation: "Khu vực này đóng góp nhiều vào xuất khẩu và việc làm."
    }
  ],

  // Chặng 7: CNH-HĐH và hội nhập
  7: [
    {
      question: "Cách mạng công nghiệp lần thứ hai đặc trưng bởi điều gì?",
      options: ["Máy hơi nước", "Điện khí hóa", "Trí tuệ nhân tạo"],
      answer: 1,
      explanation: "Lần 2 là điện khí hóa và sản xuất hàng loạt, như dây chuyền của Ford."
    },
    {
      question: "Điều quan trọng để hội nhập hiệu quả là gì?",
      options: ["Nâng năng lực cạnh tranh, giữ độc lập tự chủ", "Mở cửa hết mức, bất kể điều kiện", "Đóng cửa thị trường"],
      answer: 0,
      explanation: "Hiệu quả hội nhập phụ thuộc vào năng lực cạnh tranh của nền kinh tế."
    },
    {
      question: "Hội nhập kinh tế quốc tế có tác động thế nào?",
      options: ["Chỉ có lợi", "Chỉ có hại", "Vừa có tác động tích cực vừa có tiêu cực"],
      answer: 2,
      explanation: "Hội nhập mang lại cơ hội nhưng cũng đặt ra thách thức cạnh tranh và phụ thuộc."
    },
    {
      question: "Cách mạng công nghiệp lần thứ nhất đặc trưng bởi điều gì?",
      options: ["Điện khí hóa", "Cơ giới hóa bằng máy hơi nước", "Internet vạn vật"],
      answer: 1,
      explanation: "Máy hơi nước thay sức người và sức vật."
    },
    {
      question: "Cách mạng công nghiệp lần thứ ba đặc trưng bởi điều gì?",
      options: ["Máy hơi nước", "Điện khí hóa", "Tự động hóa dựa trên điện tử, tin học"],
      answer: 2,
      explanation: "Máy tính và công nghệ thông tin đưa sản xuất vào tự động hóa."
    },
    {
      question: "Cách mạng công nghiệp lần thứ tư gắn với yếu tố nào?",
      options: ["Công nghệ số, trí tuệ nhân tạo", "Máy hơi nước", "Dây chuyền hàng loạt"],
      answer: 0,
      explanation: "Gồm AI, dữ liệu lớn, Internet vạn vật."
    },
    {
      question: "Năm nào Nguyễn Tất Thành rời bến cảng Sài Gòn đi tìm đường cứu nước?",
      options: ["1911", "1930", "1945"],
      answer: 0,
      explanation: "Năm 1911, trên con tàu Amiral Latouche-Tréville."
    },
    {
      question: "Công nghiệp hóa, hiện đại hóa ngày nay gắn với loại hình kinh tế nào?",
      options: ["Tự cấp tự túc", "Kinh tế tri thức", "Bao cấp"],
      answer: 1,
      explanation: "Gắn với kinh tế tri thức và hội nhập quốc tế."
    },
    {
      question: "Việt Nam trở thành thành viên chính thức của WTO năm nào?",
      options: ["2000", "2007", "2015"],
      answer: 1,
      explanation: "Việt Nam là thành viên thứ 150 của WTO từ năm 2007."
    },
    {
      question: "Việt Nam gia nhập ASEAN năm nào?",
      options: ["1995", "2001", "2010"],
      answer: 0,
      explanation: "Việt Nam trở thành thành viên ASEAN năm 1995."
    },
    {
      question: "Nguyễn Tất Thành rời Việt Nam năm 1911 trên con tàu nào?",
      options: ["Amiral Latouche-Tréville", "Titanic", "Tàu Thống Nhất"],
      answer: 0,
      explanation: "Người làm phụ bếp trên con tàu này để ra nước ngoài tìm đường cứu nước."
    },
    {
      question: "Bến cảng nơi Người xuống tàu năm 1911 là bến nào?",
      options: ["Cảng Hải Phòng", "Bến Nhà Rồng (Sài Gòn)", "Cảng Cam Ranh"],
      answer: 1,
      explanation: "Bến Nhà Rồng là địa điểm khởi đầu hành trình tìm đường cứu nước."
    },
    {
      question: "Dây chuyền lắp ráp hàng loạt của Ford thuộc cuộc cách mạng công nghiệp lần nào?",
      options: ["Lần thứ nhất", "Lần thứ tư", "Lần thứ hai"],
      answer: 2,
      explanation: "Lần thứ hai gắn với điện khí hóa và sản xuất hàng loạt."
    },
    {
      question: "Công nghiệp hóa, hiện đại hóa là gì?",
      options: ["Chuyển đổi căn bản từ lao động thủ công sang lao động với công nghệ, phương tiện tiên tiến", "Quay về sản xuất thủ công", "Ngừng phát triển công nghiệp"],
      answer: 0,
      explanation: "Đó là quá trình chuyển đổi toàn diện các hoạt động kinh tế - xã hội."
    },
    {
      question: "Công nghiệp hóa rút ngắn là gì?",
      options: ["Dừng hẳn công nghiệp", "Tận dụng thành tựu khoa học công nghệ hiện đại để đi tắt, đón đầu", "Chỉ làm nông nghiệp"],
      answer: 1,
      explanation: "Nước đi sau có thể rút ngắn thời gian bằng cách tiếp thu công nghệ mới."
    },
    {
      question: "Trong kinh tế tri thức, yếu tố nào đóng vai trò quan trọng nhất?",
      options: ["Chỉ đất đai", "Chỉ sức cơ bắp", "Tri thức và công nghệ"],
      answer: 2,
      explanation: "Tri thức trở thành yếu tố sản xuất quan trọng hàng đầu."
    },
    {
      question: "Hội nhập kinh tế quốc tế là gì?",
      options: ["Quá trình gắn kết nền kinh tế một nước với khu vực và thế giới dựa trên chia sẻ lợi ích và tuân thủ chuẩn mực chung", "Đóng cửa biên giới", "Chỉ xuất khẩu gạo"],
      answer: 0,
      explanation: "Đó là quá trình mở cửa, liên kết và cùng tuân thủ luật chơi chung."
    },
    {
      question: "FTA là viết tắt của cụm từ nào?",
      options: ["Fast Transport Authority", "Free Trade Agreement", "Financial Tax Account"],
      answer: 1,
      explanation: "FTA là hiệp định thương mại tự do."
    },
    {
      question: "CPTPP có hiệu lực với Việt Nam từ năm nào?",
      options: ["2005", "2012", "2019"],
      answer: 2,
      explanation: "Hiệp định có hiệu lực với Việt Nam từ tháng 1 năm 2019."
    },
    {
      question: "Việt Nam gia nhập APEC năm nào?",
      options: ["1998", "2005", "2015"],
      answer: 0,
      explanation: "Việt Nam trở thành thành viên APEC năm 1998."
    }
  ]

};
