
Words = [];

var scores = {
  'but': 1837954, 'may': 1156542, 'day': 563402, 'did': 403725, 'top': 374809, 'cup': 289286, 'get': 211384,
  'big': 207883, 'bay': 187618, 'god': 156280, 'mid': 150304, 'put': 142652, 'got': 121526, 'pop': 113188,
  'boy': 113179, 'bob': 111727, 'met': 104701, 'map': 104602, 'cut': 98497, 'bad': 78458, 'dog': 71467,
  'pay': 68893, 'bit': 57577, 'try': 53288, 'gay': 52286, 'cat': 49406, 'mac': 49297, 'guy': 48906,
  'fly': 48601, 'dry': 47439, 'pat': 35166, 'bat': 33422, 'buy': 33100, 'tag': 33065, 'ted': 32523,
  'bed': 31342, 'fit': 30535, 'dec': 29971, 'gap': 27064, 'cap': 26946, 'mad': 26916, 'fat': 26762,
  'feb': 25707, 'dnp': 24536, 'bid': 24251, 'toy': 21539, 'pub': 20921, 'pit': 20338, 'tip': 20274,
  'pet': 19824, 'cry': 19034, 'mit': 18923, 'fed': 17619, 'bag': 15357, 'vic': 15323, 'dub': 14597,
  'mud': 14153, 'pig': 13495, 'dot': 13383, 'mob': 13154, 'doc': 13070, 'pot': 12330, 'bet': 11536,
  'zip': 10462, 'bug': 10214, 'cab': 10109, 'plc': 10104, 'bud': 9966, 'mlb': 9702, 'dad': 9523,
  'mod': 9522, 'pld': 9378, 'tap': 9075, 'cop': 8858, 'fog': 8711, 'fry': 8632, 'pac': 8453,
  'mig': 8169, 'det': 8039, 'dig': 7787, 'mat': 7659, 'gig': 7424, 'pad': 7222, 'pod': 7113,
  'duc': 6953, 'cod': 6832, 'dnq': 6787, 'paz': 6610, 'dug': 6099, 'bsc': 6082, 'med': 6017,
  'pak': 5705, 'meg': 5691, 'msc': 5598, 'fig': 5314, 'prc': 5287, 'toc': 5277, 'tug': 5233,
  'cub': 5184, 'gag': 5163, 'tnt': 4727, 'mag': 4617, 'fay': 4602, 'bog': 4427, 'dip': 4404,
  'mic': 4323, 'cid': 4291, 'vip': 4249, 'tab': 4188, 'tay': 4155, 'viz': 4151, 'bop': 4129,
  'cad': 4117, 'bey': 4077, 'gut': 4002, 'psp': 3944, 'faq': 3870, 'tak': 3695, 'crc': 3645,
  'dod': 3623, 'beg': 3476, 'peg': 3432, 'bot': 3428, 'tit': 3283, 'dat': 3162, 'puy': 3131,
  'tod': 3077, 'dag': 3060, 'cay': 2977, 'pep': 2962, 'mrt': 2956, 'bac': 2876, 'csc': 2847,
  'bsd': 2831, 'pob': 2763, 'tac': 2735, 'diy': 2730, 'vat': 2558, 'dsc': 2534, 'pic': 2470,
  'pup': 2437, 'gop': 2435, 'tat': 2427, 'pip': 2394, 'bab': 2349, 'tub': 2348, 'msg': 2336,
  'pap': 2261, 'tad': 2188, 'dab': 2181, 'tot': 2146, 'bak': 2116, 'fab': 2072, 'vet': 2036,
  'tlc': 2009, 'bod': 1983, 'mep': 1968, 'tet': 1959, 'gaz': 1946, 'png': 1919, 'dsq': 1919,
  'bec': 1910, 'dsp': 1892, 'vsd': 1891, 'biz': 1881, 'mot': 1878, 'mak': 1856, 'fsb': 1848,
  'zak': 1842, 'dyk': 1799, 'zag': 1786, 'coy': 1782, 'tic': 1780, 'fad': 1769, 'msp': 1766,
  'bok': 1736, 'fac': 1732, 'tek': 1732, 'cst': 1699, 'foy': 1696, 'crt': 1660, 'deb': 1656,
  'fsc': 1639, 'fey': 1635, 'dit': 1624, 'zig': 1620, 'bnp': 1610, 'cac': 1594, 'tng': 1581,
  'cit': 1553, 'cnc': 1548, 'zac': 1540, 'dey': 1528, 'fez': 1495, 'tec': 1485, 'cog': 1481,
  'psc': 1454, 'dap': 1451, 'mop': 1449, 'cet': 1440, 'voc': 1418, 'tok': 1407, 'zed': 1375,
  'vik': 1374, 'dnc': 1352, 'gst': 1342, 'mlc': 1338, 'ply': 1332, 'dic': 1322, 'gob': 1315,
  'gat': 1306, 'gad': 1293, 'mug': 1283, 'deg': 1282, 'psd': 1237, 'dst': 1223, 'dob': 1206,
  'baz': 1197, 'voy': 1193, 'grp': 1192, 'dac': 1190, 'zug': 1178, 'pag': 1174, 'daz': 1172,
  'mrc': 1168, 'cec': 1165, 'prd': 1164, 'voz': 1164, 'pug': 1163, 'vaz': 1162, 'cic': 1157,
  'taz': 1147, 'zap': 1145, 'drc': 1133, 'vez': 1113, 'bap': 1112, 'bsp': 1086, 'git': 1085,
  'cot': 1080, 'cob': 1059, 'csp': 1057, 'frg': 1052, 'mib': 1052, 'pid': 1050, 'grc': 1030,
  'pnc': 1020, 'csd': 1013, 'mok': 1011, 'pec': 1011, 'ged': 1008, 'cep': 992, 'clp': 985,
  'cip': 973, 'boz': 966, 'moy': 962, 'drg': 956, 'cng': 951, 'brt': 918, 'moz': 908,
  'dup': 904, 'gec': 901, 'boc': 888, 'dlp': 887, 'pst': 877, 'piz': 874, 'fec': 868,
  'dak': 864, 'gac': 849, 'dep': 841, 'vid': 838, 'ved': 819, 'pnp': 819, 'duk': 818,
  'fap': 810, 'clc': 810, 'prt': 804, 'fob': 800, 'cnt': 795, 'bly': 792, 'gib': 791,
  'flp': 785, 'bez': 764, 'dik': 760, 'mst': 754, 'psg': 740, 'gnp': 739, 'tuc': 732,
  'vuk': 730, 'vac': 728, 'tsb': 724, 'gog': 715, 'tib': 710, 'trt': 706, 'vit': 704,
  'bic': 699, 'dsb': 698, 'tut': 691, 'mab': 684, 'blk': 680, 'vig': 680, 'grt': 679,
  'mek': 673, 'bek': 671, 'pik': 653, 'glc': 651, 'mec': 647, 'coc': 639, 'clb': 637,
  'clk': 635, 'buk': 627, 'mut': 625, 'trg': 621, 'dez': 614, 'tid': 613, 'tsp': 612,
  'bsg': 606, 'tik': 598, 'zeb': 590, 'zab': 589, 'goc': 580, 'mey': 579, 'cag': 568,
  'foz': 557, 'tsc': 555, 'tsg': 547, 'tuk': 543, 'coq': 543, 'vod': 541, 'psy': 537,
  'dib': 535, 'bib': 534, 'vld': 532, 'vrc': 531, 'flt': 529, 'dnb': 527, 'pez': 523,
  'frc': 514, 'fag': 507, 'fid': 505, 'moc': 504, 'bst': 502, 'dud': 501, 'zod': 500,
  'psk': 500, 'muy': 498, 'gab': 497, 'miz': 497, 'gsp': 496, 'bsb': 496, 'mup': 493,
  'trk': 492, 'plt': 491, 'pek': 487, 'csg': 485, 'fib': 481, 'pok': 478, 'poc': 474,
  'vst': 473, 'fet': 466, 'dsg': 464, 'zog': 461, 'cnd': 458, 'mrp': 453, 'typ': 453,
  'dlc': 448, 'mik': 448, 'gsc': 447, 'dok': 441, 'msk': 440, 'dop': 434, 'pud': 433,
  'bip': 433, 'puc': 433, 'vad': 421, 'teg': 419, 'prp': 417, 'csb': 415, 'vec': 415,
  'zot': 413, 'faz': 412, 'brp': 411, 'ded': 406, 'tuy': 404, 'trc': 404, 'vrt': 402,
  'zob': 399, 'vsc': 399, 'mog': 398, 'msd': 397, 'mrd': 392, 'guk': 391, 'gud': 391,
  'pry': 389, 'mlk': 389, 'plp': 388, 'crb': 387, 'puk': 384, 'veg': 378, 'cud': 377,
  'fut': 376, 'ced': 373, 'mlp': 368, 'veb': 367, 'trp': 358, 'fop': 358, 'mlg': 357,
  'vak': 357, 'dnd': 352, 'buz': 350, 'bnc': 346, 'fip': 344, 'gsd': 343, 'crp': 342,
  'vag': 340, 'gid': 339, 'muk': 334, 'fuk': 334, 'caz': 334, 'bub': 333, 'cuc': 332,
  'buc': 331, 'cib': 331, 'poy': 327, 'tld': 326, 'cyd': 326, 'blt': 324, 'fiz': 322,
  'fok': 321, 'maz': 321, 'dlg': 320, 'vib': 320, 'duy': 320, 'mnc': 319, 'diz': 318,
  'cyp': 318, 'ped': 317, 'grb': 316, 'taq': 316, 'psb': 315, 'mnt': 313, 'bep': 311,
  'tob': 309, 'prk': 306, 'tog': 305, 'flq': 303, 'fsk': 299, 'bsk': 297, 'pyc': 297,
  'blg': 296, 'vlc': 295, 'tey': 294, 'gly': 291, 'gnc': 289, 'vnc': 285, 'goy': 284,
  'csk': 283, 'tig': 282, 'cyc': 281, 'mip': 281, 'mez': 280, 'bry': 280, 'cuz': 278,
  'gsb': 277, 'dsd': 277, 'tep': 277, 'cak': 274, 'ceb': 273, 'crd': 272, 'gic': 271,
  'muc': 270, 'zet': 269, 'dek': 268, 'byd': 268, 'gsg': 267, 'dut': 265, 'drt': 264,
  'clg': 263, 'gry': 263, 'brb': 263, 'glp': 262, 'gsk': 261, 'fot': 260, 'fnc': 259,
  'tnc': 257, 'zsc': 253, 'brd': 251, 'pnt': 246, 'brc': 246, 'tsz': 245, 'zep': 245,
  'vey': 242, 'mlt': 242, 'vap': 240, 'fug': 240, 'gok': 239, 'clt': 237, 'frp': 236,
  'geb': 235, 'gep': 233, 'miq': 232, 'vab': 230, 'fic': 229, 'mng': 228, 'pog': 228,
  'fsp': 224, 'vaq': 223, 'foc': 222, 'cik': 221, 'zec': 220, 'grd': 220, 'trb': 218,
  'myc': 217, 'msb': 215, 'cyg': 214, 'feg': 213, 'mnd': 213, 'pib': 212, 'gak': 212,
  'prb': 210, 'prg': 209, 'doz': 207, 'gip': 206, 'cey': 205, 'pnb': 204, 'vay': 203,
  'drb': 202, 'fak': 202, 'bnd': 201, 'myp': 201, 'cnp': 200, 'msz': 198, 'zad': 197,
  'crg': 197, 'vsb': 197, 'blp': 197, 'coz': 197, 'muz': 196, 'mld': 195, 'mnp': 194,
  'trd': 191, 'zat': 190, 'dng': 190, 'dlt': 189, 'bik': 188, 'vok': 188, 'doy': 187,
  'goz': 187, 'zay': 184, 'gyp': 182, 'bng': 182, 'tup': 181, 'tlb': 180, 'vek': 179,
  'zaz': 174, 'vep': 173, 'poz': 173, 'zit': 170, 'cny': 170, 'vlt': 170, 'teb': 162,
  'cez': 162, 'zuk': 160, 'fst': 159, 'vlb': 156, 'frd': 155, 'pey': 154, 'cig': 154,
  'byc': 154, 'tnb': 152, 'fud': 149, 'meb': 149, 'fsg': 145, 'tsk': 145, 'blb': 141,
  'boq': 140, 'zek': 140, 'vsp': 140, 'tlp': 140, 'gup': 139, 'mly': 137, 'fiq': 136,
  'pyt': 133, 'meq': 133, 'fod': 131, 'brg': 130, 'fld': 129, 'zid': 129, 'cok': 127,
  'fik': 125, 'duz': 125, 'gnd': 125, 'glt': 125, 'fsd': 125, 'vnd': 124, 'vob': 123,
  'pab': 122, 'tst': 122, 'byp': 122, 'blc': 121, 'fnp': 121, 'tyk': 121, 'dsk': 120,
  'tyc': 119, 'tnk': 118, 'tud': 117, 'tnp': 117, 'tsd': 117, 'peb': 113, 'pyp': 112,
  'flc': 111, 'ziq': 110, 'zub': 110, 'gey': 109, 'drp': 108, 'gek': 107, 'pnd': 107,
  'vot': 106, 'gnb': 105, 'byt': 104, 'cuy': 104, 'plz': 104, 'frk': 103, 'ceg': 103,
  'dyp': 103, 'bnt': 102, 'bup': 101, 'gug': 100, 'glb': 100, 'tez': 99, 'cld': 99,
  'gub': 99, 'brk': 98, 'mrg': 98, 'grk': 98, 'guz': 95, 'byg': 95, 'cuk': 94,
  'zrk': 94, 'fnb': 93, 'ziz': 93, 'tuz': 93, 'gez': 91, 'guc': 91, 'toz': 89,
  'moq': 89, 'giz': 88, 'cnb': 88, 'vsg': 87, 'mrb': 86, 'gnt': 85, 'dnt': 85,
  'vlk': 83, 'gik': 83, 'vog': 82, 'myt': 81, 'vlg': 81, 'dld': 79, 'bld': 79,
  'glk': 79, 'zst': 79, 'tiz': 78, 'fep': 78, 'gld': 77, 'fuc': 77, 'cyt': 77,
  'flg': 77, 'msy': 76, 'glg': 75, 'zib': 73, 'frt': 73, 'vsk': 72, 'paq': 71,
  'bnb': 71, 'caq': 70, 'mrk': 70, 'fuq': 69, 'grg': 69, 'plk': 68, 'tlt': 67,
  'dnk': 67, 'bnz': 66, 'beb': 66, 'cnk': 66, 'daq': 66, 'ciq': 65, 'mnk': 65,
  'fng': 64, 'zik': 63, 'vrd': 63, 'frb': 63, 'crk': 62, 'tnd': 62, 'znc': 62,
  'byz': 61, 'dlb': 61, 'drd': 61, 'maq': 60, 'pyg': 60, 'peq': 59, 'blz': 59,
  'plb': 58, 'zut': 57, 'fuz': 57, 'cug': 55, 'byk': 55, 'deq': 54, 'zok': 53,
  'flb': 53, 'vop': 53, 'fyp': 52, 'znk': 52, 'zuz': 52, 'brz': 51, 'baq': 51,
  'bny': 51, 'tlg': 50, 'tnz': 50, 'piq': 49, 'goq': 49, 'myk': 48, 'zey': 48,
  'fsq': 48, 'bnk': 48, 'clq': 48, 'cek': 47, 'viy': 47, 'tiy': 47, 'fnd': 47,
  'zic': 46, 'gng': 46, 'pny': 45, 'drk': 44, 'zsg': 44, 'zrt': 43, 'mnb': 42,
  'geg': 42, 'fup': 42, 'fnt': 42, 'buq': 42, 'gyc': 42, 'plq': 41, 'mry': 41,
  'vly': 41, 'plg': 41, 'vut': 40, 'doq': 40, 'cyk': 40, 'cly': 40, 'vug': 39,
  'zrp': 38, 'dlk': 38, 'vrp': 38, 'msq': 38, 'znp': 38, 'cyz': 37, 'tsq': 37,
  'cnq': 36, 'ciy': 36, 'duq': 35, 'myg': 35, 'fyt': 35, 'cuq': 34, 'biy': 34,
  'beq': 34, 'vng': 32, 'vrb': 32, 'vup': 32, 'cyb': 32, 'ceq': 32, 'flk': 31,
  'vry': 31, 'zeg': 31, 'fek': 31, 'vub': 31, 'vnt': 30, 'zud': 30, 'bsy': 30,
  'dly': 30, 'zez': 30, 'vyt': 30, 'zoq': 30, 'vuc': 29, 'vrg': 29, 'zyb': 29,
  'fnk': 29, 'zoc': 29, 'glq': 29, 'myb': 29, 'zyc': 28, 'prq': 28, 'dsz': 28,
  'blq': 28, 'vyp': 28, 'mub': 27, 'ciz': 27, 'tnq': 27, 'fub': 27, 'vud': 27,
  'vlp': 27, 'csq': 27, 'bsq': 26, 'tyg': 26, 'mlq': 25, 'prz': 25, 'csz': 25,
  'tyt': 25, 'mnz': 25, 'zyz': 25, 'trz': 25, 'tiq': 25, 'crz': 25, 'gsz': 25,
  'drq': 24, 'vsz': 24, 'mnq': 24, 'zop': 24, 'grz': 24, 'psz': 24, 'fyc': 24,
  'mny': 23, 'tsy': 23, 'dyd': 23, 'toq': 23, 'zsp': 23, 'flz': 22, 'gny': 22,
  'dyt': 22, 'dny': 21, 'teq': 21, 'crq': 21, 'myd': 21, 'zoz': 21, 'frz': 20,
  'tyd': 20, 'tyb': 20, 'pyd': 20, 'tlk': 20, 'dyc': 20, 'vuz': 20, 'gyd': 19,
  'fnq': 19, 'mrz': 19, 'pyy': 19, 'znd': 19, 'myq': 19, 'csy': 19, 'psq': 18,
  'byb': 18, 'zsd': 18, 'vyg': 18, 'dyb': 18, 'diq': 18, 'pnk': 17, 'tuq': 17,
  'puz': 16, 'mrq': 16, 'zrc': 16, 'gyy': 16, 'zsk': 15, 'bnq': 15, 'vrk': 15,
  'tlz': 15, 'drz': 15, 'zuc': 15, 'feq': 15, 'gsy': 14, 'vny': 14, 'gsq': 14,
  'zyp': 14, 'tyy': 14, 'geq': 14, 'voq': 14, 'myz': 13, 'zny': 13, 'vyd': 13,
  'fyb': 13, 'zyg': 13, 'vnp': 13, 'zly': 13, 'gnz': 13, 'zrg': 13, 'zrb': 13,
  'zlt': 13, 'fuy': 13, 'dyg': 13, 'biq': 13, 'tyz': 13, 'pyb': 13, 'vnk': 12,
  'zup': 12, 'pyk': 12, 'brq': 12, 'miy': 12, 'tlq': 12, 'clz': 12, 'zyd': 12,
  'puq': 12, 'glz': 12, 'grq': 11, 'dnz': 11, 'pnq': 11, 'bsz': 11, 'zng': 11,
  'gaq': 11, 'frq': 11, 'vnb': 11, 'zlb': 11, 'tny': 11, 'gnq': 11, 'zoy': 11,
  'znz': 11, 'pnz': 10, 'mlz': 10, 'dlz': 10, 'fyd': 10, 'myy': 10, 'zlp': 9,
  'zaq': 9, 'fny': 9, 'pyq': 9, 'muq': 9, 'cnz': 8, 'trq': 8, 'zsb': 8,
  'gnk': 8, 'piy': 8, 'fyk': 8, 'vyz': 7, 'tly': 7, 'byy': 7, 'viq': 7,
  'zlk': 7, 'gyg': 7, 'poq': 6, 'fnz': 6, 'vlz': 6, 'foq': 6, 'dsy': 6,
  'gyt': 6, 'giy': 6, 'gyb': 6, 'tyq': 6, 'vrq': 6, 'znt': 6, 'vsq': 6,
  'fyq': 5, 'zlg': 5, 'dlq': 5, 'vnz': 5, 'fsz': 5, 'vyc': 5, 'gyz': 4,
  'zuy': 4, 'zry': 4, 'pyz': 4, 'zyy': 4, 'cyy': 4, 'cyq': 4, 'zsy': 4,
  'guq': 4, 'giq': 4, 'dyy': 4, 'fyg': 4, 'vlq': 4, 'byq': 4, 'fsy': 3,
  'dyz': 3, 'fiy': 3, 'zld': 3, 'vsy': 3, 'zlz': 3, 'zlc': 3, 'zrq': 3,
  'vrz': 3, 'zeq': 2, 'zrd': 2, 'zuq': 2, 'zlq': 2, 'zsz': 2, 'zyt': 2,
  'vuq': 2, 'ziy': 2, 'fyz': 2, 'vyb': 2
};

// number of list items is numCopies * 1000
var numCopies = 10;
(function () {
  for (var n = 1; n <= numCopies; n++) {
    _.each('bcdfgmptvz'.split(''), function (x) {
      _.each('aioueynrls'.split(''), function (y) {
        _.each('bcdgkpqtyz'.split(''), function (z) {
          var w = x + y + z;
          Words.push({_id: w + (n === 1 ? '' : n),
                      word: w,
                      score: (scores[w] || 0)});
        });
      });
    });
  }
})();

if (Meteor.isClient) {
  Session.setDefault('sortBy', '+word');

  var NN = 1;

  var changeIdsEachTime = false;

  Template.main.words = function () {
    var sortBy = Session.get('sortBy');
    Words.sort(function (a, b) {
      if (changeIdsEachTime) {
        a._id = String(NN++);
        b._id = String(NN++);
      }
      a = a[sortBy.slice(1)];
      b = b[sortBy.slice(1)];
      var result = (a === b) ? 0 : (a < b) ? -1 : 1;
      if (sortBy.charAt(0) === '-')
        result = -result;
      return result;
    });
    return Words;
  };

  Template.main.sortDescs = [{ name: '+word', title: 'Word' },
                              { name: '-score', title: 'Score' }];

  Template.main.sortByClass = function (field) {
    if (field === Session.get('sortBy'))
      return 'selected';
    return '';
  };

  Template.main.events({
    'click .sortBy': function () {
      Session.set('sortBy', this.name);
    }
  });

  Meteor.startup(function () {

  });
}
