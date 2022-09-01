# gcloud-github-actions-book

「Google CloudとGitHub ActionsでPull Request連動環境を作る本（商業版）」で利用したスクリプトなどを格納しているリポジトリです。  
設定や利用方法は書籍を参照してください。

同人誌版は別リポジトリの内容となりますので、ご注意ください。 https://github.com/taiko19xx/gcp-github-actions-book

書籍は各ストアで配信・販売中です。
* Amazon（ https://amzn.to/3eg10Qw ）
* その他（出版元を参照  https://nextpublishing.jp/book/15427.html ）

| フォルダ      | 対応章                                             | 中身                                                        |
| ------------- | -------------------------------------------------- | ----------------------------------------------------------- |
| part1         | 第1章 Google Cloudの設定                           | OpenSSL構成ファイル（openssl.cnf）                          |
| part2/static  | 第2章 GitHubとアプリケーションの設定               | 静的ターゲットのファイル                                    |
| part2/dynamic | 第2章 GitHubとアプリケーションの設定               | 動的ターゲットのファイル                                    |
| part3         | 第3章 Cloud Storageと組み合わせる                  | PR連携のworkflow                                            |
| part4         | 第4章 Cloud Runと組み合わせる                      | PR連携のworkflow、Dockerfile/cloudbuild.yaml（5章でも利用） |
| part5         | 第5章 Google Kubernetes Engineと組み合わせる       | PR連携のworkflow、Kubernetesの各種YAML                      |

## ライセンス
MIT License
