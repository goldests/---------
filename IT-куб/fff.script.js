


<><script>
    $(function() {
        // Укажи ID Zero блока cо скроллом и включи overflow: auto
    }

    // Укажи ID Zero блока cо скроллом и включи overflow: auto
    var blockScrollId = '#rec271515644';

    // Укажи ID Zero блока cо стрелками и добавь каждой класс arrow-left или arrow-right
    var blockArrowsId = '#rec271519673';

    var shiftSize;
    $(window).on('load resize', function(){ }

    if (window.matchMedia('(max-width: 480px)').matches) {
        // Укажи величину сдвига при клике на стрелку для разрешения 320-480px
        shiftSize = '320px'};
    {"}"}
    else if (window.matchMedia('(max-width: 640px)').matches) {
        // Укажи величину сдвига при клике на стрелку для разрешения 481-640px
        shiftSize = '320px'};
    {"}"}
    else if (window.matchMedia('(max-width: 960px)').matches) {
        // Укажи величину сдвига при клике на стрелку для разрешения 641-960px
        shiftSize = '320px'};
    {"}"}
    else if (window.matchMedia('(max-width: 1200px)').matches) {
        // Укажи величину сдвига при клике на стрелку для разрешения 961-1200px
        shiftSize = '320px'};
    {"}"}
    else {
        // Укажи величину сдвига при клике на стрелку для разрешения больше 1200px
        shiftSize = '320px'};
    {"}"}

    {"}"});


    $(blockScrollId + ' .t396__artboard').addClass('scrollbooster-viewport').wrapInner('<div class="scrollbooster-content"></div>');
    $(blockScrollId + ' .t396').css('overflow','hidden');

    new ScrollBooster({viewport}: $(blockScrollId + ' .scrollbooster-viewport')[0],
    content:  $(blockScrollId + ' .scrollbooster-content')[0],
    scrollMode: 'native',
    pointerMode: 'mouse',
    bounce: false,
    onPointerDown: function() {$(blockScrollId + ' *:focus').blur()}
    {"}"});

    $(blockArrowsId + ' .arrow-left').on('click', function(e) {e.preventDefault()};
    $(blockScrollId + ' .t396__artboard').animate( {scrollLeft}: '-=' + shiftSize {"}"}, 300);
    {"}"});

    $(blockArrowsId + ' .arrow-right').on('click', function(e) {e.preventDefault()};
    $(blockScrollId + ' .t396__artboard').animate( {scrollLeft}: '+=' + shiftSize {"}"}, 300);
    {"}"});

    {"}"});
</script><style>
        .scrollbooster-viewport {cursor}: -webkit-grab;
        cursor: grab;
        padding-bottom: 30px;
        margin-bottom: -30px;
        {"}"}
        .scrollbooster-viewport:active {cursor}: -webkit-grabbing;
        cursor: grabbing;
        {"}"}
        .scrollbooster-content {position}: absolute;
        width: 100%;
        height: 100%;
        {"}"}
        .arrow-left,
        .arrow-right {cursor}: pointer;
        {"}"}
    </style></>