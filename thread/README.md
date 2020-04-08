## nodejs 线程的一些历史

- child_process.exec nodejs v0.1.90加入

- new Worker 创建线程

v10.5.0加入nodejs，v11.7.0之前需要 --experimental-worker开启

这个线程API太新了，目前效率也不够高，文档自己都说了