# 命令行参数介绍


```

────────╔╗──╔╗
────────║║──║║
╔══╗╔══╗║╚═╗║║─╔╗╔══╗
║╔╗║║╔╗║║╔╗║║║─╠╣║╔╗╗
║╚╝║║╚╝║║╚╝║║╚╗║║║║║║
╚═╗║╚══╝╚══╝╚═╝╚╝╚╝╚╝
╔═╝║  v0.3.9-next - 2021-09-12T08:12:09Z
╚══╝
        From: https://github.com/xiecat/goblin

Please use this tool within the scope of the license.
goblin is not responsible for any risks arising from the use of the tool.
Use agrees to this statement
 
Usage of goblin:
  -config string
        Webserver port (default "goblin.yaml")
  -gen-plugin string
        Generate rule file
  -log string
        Webserver log file (default "goblin.log")
  -log-level int
        Log mode [1-5] 1.dump All logs include GET log and POST log, 2. Record POST log, 3. Record dump log in rules, 4. Record error log, and 5. Record exception exit log (default 1)
  -print-config
        print config file
  -test-notice
        Test message alarm
  -v    Show version of goblin
  -w    Write config to config file
```