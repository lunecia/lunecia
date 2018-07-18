var quotes = [
    ['ใช้ชีวิตให้เรียบง่าย',{'อวัยวะ':'สมอง'},'จะได้สบายขึ้น'],
    ['ชีวิตคือการ',{'กริยา':'เดินทาง'},' ไม่ใช่การ',{'กริยา':'แข่งขัน'}],
    ['ไม่มีใคร',{'กริยา':'เดิน'},'ได้ตั้งแต่เกิดหรอก ทุกสิ่งมันต้องมีการฝึกหัด'],
    ['การ',{'กริยา':'เริ่มต้น'},'เป็นเรื่องยาก แต่การ',{'กริยา':'ก้าว'},'ต่อไปเป็นเรื่องยากกว่า'],
    ['ทุกๆ วันใหม่คือ',{'นาม':'โอกาส'},'ที่จะ',{'กริยา':'เปลี่ยนแปลง'},'ชีวิตของคุณ'],
    ['จง',{'กริยา':'กระหาย'},'และ ทำตัวให้',{'คุณศัพท์':'โง่'},'ตลอดเวลา'],
    ['ใช้ชีวิตราวกับว่าคุณจะ',{'กริยา':'ตาย'},'พรุ่งนี้และ ',{'กริยา':'เรียนรู้'},'ราวกับว่าคุณจะมีชีวิตอยู่ตลอดไป'],
    [{'นาม':'ความสำเร็จ'},'คือครูที่',{'คุณศัพท์':'แย่'},'มาก เพราะมันล่อลวงคน',{'คุณศัพท์':'ฉลาด'},'ให้คิดว่าพวกเขาไม่มีวัน',{'กริยา':'ล้มเหลว'}],
    ['เรียนรู้จากวัน',{'วัน...':'วาน'},'ใช้ชีวิตอยู่ในวัน',{'วัน...':'นี้'},'มีความหวังกับวัน',{'วัน...':'พรุ่งนี้'},'สิ่งสำคัญคืออย่าหยุด',{'กริยา':'ตั้งคำถาม'}],
    ['ผู้ที่',{'กริยา':'ประสบความสำเร็จ'},'อย่างยอดเยี่ยม ล้วนมาจากการมีเสรีภาพที่จะ',{'กริยา':'ล้มเหลว'}],
    ['เพียง',{'กริยา':'รอบรู้'},'ไม่พอ ต้อง',{'กริยา':'ประยุกต์'},'ได้ เพียง',{'กริยา':'มุ่งมั่น'},'ไม่พอ ต้อง',{'กริยา':'ลงมือทำ'},'ได้'],
    ['คนที่มีความ',{'อารมณ์':'สุข'},'ที่สุด ไม่จำเป็นจะต้องมีสิ่งที่',{'คุณศัพท์':'ดี'},'ที่สุด พวกเค้าแค่',{'กริยา':'พอใจ'},'ในสิ่งที่ตัวเองมีอยู่']
];

 

function getQuote() {
    console.clear();
    $('.container').addClass('editing').removeClass('original-shown');
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    $('.quote').html('');
    var $quote = $('<p></p>');
    $.each(randomQuote,function(index,value){
        if (typeof(value) == 'string') {
            $('<span class="text">'+value+'</span>').appendTo($quote);
        }
        if (typeof(value) == 'object') {
            $.each(value, function(pos, word) {
                if (pos == 'punctuation') {
                    $('<span class="punctuation">'+word+'</span>').appendTo($quote);
                } else {
                    $('<span class="blank"><input type="text" placeholder=" " value="'+word+'" readonly class="original" /><input type="text" id="word-'+index+'" placeholder=" " class="entry" /><label for="word-'+index+'">'+pos+'</label></span>').appendTo($quote);
                }
            });
        }
    });
    $quote.appendTo('.quote');
    Stretchy.resizeAll();
    // $('input.entry').eq(0).focus();
};

getQuote();

$('button.show-original').on('click',function(e){
    e.preventDefault();
    $('.container').addClass('original-shown');
    Stretchy.resizeAll();
});
$('button.hide-original').on('click',function(e){
    e.preventDefault();
    $('.container').removeClass('original-shown');
    Stretchy.resizeAll();
});
$('form').on('submit',function(e){
    e.preventDefault();
    $('.container').toggleClass('editing');
}); 

$('button.new').on('click',function(){
    getQuote();
});

$(window).on('resize',function(){
    Stretchy.resizeAll();
});