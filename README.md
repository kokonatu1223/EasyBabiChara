# EasyBabiChara

![demo](https://github.com/kokonatu1223/share/blob/main/pftp4-kwwrg.gif)

## これは？
デスクトップにバーチャル受肉体なんかを置けるElectronアプリです。ちょっと動きのあるデスクトップマスコットとしても、画面共有だけで配信したいときにも。

## 使用方法

ElectronをインストールしてEasyBabiChara/EasyBabiCharaディレクトリでelectron main.jsを実行

## できたこと
- デスクトップへのキャラクター表示
- 背景透過とクリック透過
- まばたき（マウスが画面の中心を横切るとまばたきします）
- 半目（キャラクター描写部の上半分にマウスホバー）
- 笑顔（キャラクター描写部の下半分にマウスホバー）
- 口パク（マイク入力の大きさに合わせて）
- マイク閾値調整（mouth.jsの数値を直接変更）

```javascript
var changeMouth = function(){
  let freq = Math.floor(getFrequency());
  if(freq<8){ //閉じ口->中口の閾値
    mouth.style.backgroundImage = 'url(character/mouth_1.png)';
  }else if(freq < 20){ //中口->大口の閾値
    mouth.style.backgroundImage = 'url(character/mouth_2.png)';
  }else{
    mouth.style.backgroundImage = 'url(character/mouth_3.png)';
  }
}
```



- キャラクター変更
  - body（目と口以外）
  - eyes_1,2,3（目。1が閉じ目、2が半目、3が通常）
  - eyes_other（下半身ホバー時の特殊目。デフォルトでは笑顔）
  - mouth_1,2,3（口。1<2<3の順で大きく開くように）

## できてないこと

- パッケージ化、インストール
- MacOS 10.15.7以外での動作確認
- jsonで設定管理
- 設定メニューでの設定管理
- デフォルトキャラクターの塗り

## 参考
#### Electron自体
- [Electron公式](https://www.electronjs.org)
- [ようこそ！Electron入門](https://qiita.com/umamichi/items/6ce4f46c1458e89c4cfc)
- [Electronと透過ウィンドウ](https://qiita.com/fiji/items/59294b9f557be3f7f45b)
- [Electronでデスクトップいっぱいに雪を降らせるアプリを作る](https://qiita.com/nyamogera/items/a2e367b44e78d04ee3a6)
- [screen - Electron docs gitbook](https://imfly.gitbooks.io/electron-docs-gitbook/content/jp/api/screen.html)

#### CSSパラパラアニメ周り
- [CSSパラパラアニメを複数background-imageで作る](https://qiita.com/kobaatsu/items/da251a53877350a02a9c)
- [もうちらつきなんて怖くない！マウスオーバーでbackground-imageを切り替える方法](https://www.wantedly.com/companies/logical-studio/post_articles/253054)

#### Web Audio API周り
- [Web API（Mozilla）](https://developer.mozilla.org/ja/docs/Web/API)
- [WebAudioAPIの基礎](https://www.html5rocks.com/ja/tutorials/webaudio/intro/)
- [とりあえず難しいこと置いといて、Web Audio APIから波形データだけ抽出して遊んでみたい人向け](http://blog.tnker.com/124)
- [Web Audio APIで音を扱う](https://tech.pfq.jp/blog/1010/)
