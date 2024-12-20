import React from "react";

function page() {
  const text = `
1. نطاق المحتوى:
    - اشرح نطاق المحتوى الذي سيغطيه الموقع، مثل الوصفات الطبخية، النصائح والإرشادات الخاصة بالطبخ والمطبخ.
    - ضع قيود واضحة على المحتوى غير المناسب أو المنتهك للحقوق الفكرية.
 
 2. المساهمات والتفاعل:
    - حدد سياسات النشر والتعليقات للمستخدمين، بما في ذلك معايير الجودة والملائمة.
    - اشرح عملية مراجعة المحتوى المقدم من المستخدمين قبل النشر.
    - وضح قواعد السلوك المقبول والغير مقبول في التفاعل بين المستخدمين.
 
 3. الخصوصية والأمان:
    - أوضح سياسة الخصوصية واستخدام بيانات المستخدمين.
    - حدد الإجراءات المتبعة لحماية بيانات المستخدمين والمحتوى المنشور.
 
 4. الملكية الفكرية:
    - أشرح حقوق النشر والاستخدام المسموح به للمحتوى على الموقع.
    - ضع إرشادات واضحة بشأن استخدام المواد المحمية بحقوق النشر.
 
 5. المسؤولية والإخلاء من المسؤولية:
    - أوضح أن المحتوى المقدم هو لأغراض إعلامية فقط وليس للاعتماد عليه كنصيحة طبية أو قانونية.
    - احرص على إخلاء المسؤولية عن أي أضرار ناتجة عن استخدام المحتوى.
 
 6. التغييرات والتحديثات:
    - أوضح سياسة إجراء التغييرات على السياسات وإبلاغ المستخدمين.
 
 تأكد من صياغة هذه السياسات بطريقة واضحة وشاملة لتوفير إطار عمل قوي لإدارة الموقع والحفاظ على تجربة مستخدمين إيجابية. إذا كان لديك أي أسئلة أخرى، فلا تتردد في الاستفسار.
 `;

  return (
    <div className="bg-custom-gradient p-10 md:p-20">
      <h2 className="mb-5 text-2xl text-header font-bold">سياسات الموقع:</h2>

      <p className="whitespace-pre-wrap leading-7 text-lg">{text}</p>
    </div>
  );
}

export default page;
