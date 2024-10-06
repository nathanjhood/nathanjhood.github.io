// import type React = require('react');
import type ReactNative = require('react-native');
import rn = require('react-native');
import AppJson = require('../../app.json');
import Logo = require('../components/Logo');
import '../nativewind';
import nativewind = require('nativewind');

type HomeProps = React.PropsWithChildren<{
  dimensions?: ReactNative.ScaledSize;
}>;

interface Home {
  (props?: HomeProps): JSX.Element;
}

const Home = (props?: HomeProps): JSX.Element => {
  const { StyleSheet, Text, View, useWindowDimensions } = rn;

  const dimensions = props?.dimensions || useWindowDimensions();

  const { scale } = dimensions;

  const { styled } = nativewind;
  const StyledView = styled(View);
  const StyledText = styled(Text);

  const styles = StyleSheet.create<{
    container: ReactNative.ViewStyle;
    header: ReactNative.ViewStyle;
    code: ReactNative.TextStyle;
    p: ReactNative.TextStyle;
    link: ReactNative.TextStyle;
  }>({
    container: {
      color: 'white',
      backgroundColor: '#282c34',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      minHeight: '100vh',
      fontSize: '10px + 2vmin',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    code: {
      fontFamily: 'monospace, monospace',
    },
    p: {
      color: 'white',
    },
    link: {
      color: '#61dafb',
    },
  });

  const tones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const colors = [
    'slate',
    'gray',
    'neutral',
    'zinc',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuschia',
    'pink',
    'rose',
    'lightBlue',
    'warmGray',
    'trueGray',
    'coolGray',
    'blueGray',
  ];

  return (
    <StyledView style={styles.container}>
      <StyledView style={{ height: 12 }} />

      <StyledText style={styles.p}>Welcome to {AppJson.displayName}</StyledText>

      <Logo width={841.9 * scale} height={595.3 * scale} />

      <StyledView style={styles.header}>
        <StyledText style={styles.p} className="color-white">
          <StyledText style={styles.code}>Under construction...</StyledText>
        </StyledText>

        <StyledView style={{ height: 12 }} />

        <StyledText
          style={styles.link}
          href="https://github.com/nathanjhood/esbuild-scripts"
          // target="_blank"
          // rel="noopener noreferrer"
          className="color-white"
        >
          Powered by React Native with esbuild and Typescript
        </StyledText>
      </StyledView>

      {/* <StyledText className="color-white"></StyledText>
      <StyledText className="color-black"></StyledText>
      <StyledText className="color-transparent"></StyledText>
      <StyledText className="color-inherit"></StyledText>
      <StyledText className="color-current"></StyledText> */}

      {colors.map((color) => {
        return tones.map((tone) => {
          return (
            <StyledText className={'color-' + color + '-' + tone}>
              {"<StyledText className='" +
                'color-' +
                color +
                '-' +
                tone +
                "'>'" +
                color +
                '-' +
                tone +
                "'</StyledText>"}
            </StyledText>
          );
        });
      })}

      {/* <StyledText className="color-slate-50">'slate-50'</StyledText>
      <StyledText className="color-slate-100">'slate-100'</StyledText>
      <StyledText className="color-slate-200">'slate-200'</StyledText>
      <StyledText className="color-slate-300">'slate-300'</StyledText>
      <StyledText className="color-slate-400">'slate-400'</StyledText>
      <StyledText className="color-slate-500">'slate-500'</StyledText>
      <StyledText className="color-slate-600">'slate-600'</StyledText>
      <StyledText className="color-slate-700">'slate-700'</StyledText>
      <StyledText className="color-slate-800">'slate-800'</StyledText>
      <StyledText className="color-slate-900">'slate-900'</StyledText>
      <StyledText className="color-slate-950">'slate-950'</StyledText>
      <StyledText className="color-gray-50">'gray-50'</StyledText>
      <StyledText className="color-gray-100">'gray-100'</StyledText>
      <StyledText className="color-gray-200">'gray-200'</StyledText>
      <StyledText className="color-gray-300">'gray-300'</StyledText>
      <StyledText className="color-gray-400">'gray-400'</StyledText>
      <StyledText className="color-gray-500">'gray-500'</StyledText>
      <StyledText className="color-gray-600">'gray-600'</StyledText>
      <StyledText className="color-gray-700">'gray-700'</StyledText>
      <StyledText className="color-gray-800">'gray-800'</StyledText>
      <StyledText className="color-gray-900">'gray-900'</StyledText>
      <StyledText className="color-gray-950">'gray-950'</StyledText>
      <StyledText className="color-neutral-50">'neutral-50'</StyledText>
      <StyledText className="color-neutral-100">'neutral-100'</StyledText>
      <StyledText className="color-neutral-200">'neutral-200'</StyledText>
      <StyledText className="color-neutral-300">'neutral-300'</StyledText>
      <StyledText className="color-neutral-400">'neutral-400'</StyledText>
      <StyledText className="color-neutral-500">'neutral-500'</StyledText>
      <StyledText className="color-neutral-600">'neutral-600'</StyledText>
      <StyledText className="color-neutral-700">'neutral-700'</StyledText>
      <StyledText className="color-neutral-800">'neutral-800'</StyledText>
      <StyledText className="color-neutral-900">'neutral-900'</StyledText>
      <StyledText className="color-neutral-950">'neutral-950'</StyledText>
      <StyledText className="color-zinc-50">'zinc-50'</StyledText>
      <StyledText className="color-zinc-100">'zinc-100'</StyledText>
      <StyledText className="color-zinc-200">'zinc-200'</StyledText>
      <StyledText className="color-zinc-300">'zinc-300'</StyledText>
      <StyledText className="color-zinc-400">'zinc-400'</StyledText>
      <StyledText className="color-zinc-500">'zinc-500'</StyledText>
      <StyledText className="color-zinc-600">'zinc-600'</StyledText>
      <StyledText className="color-zinc-700">'zinc-700'</StyledText>
      <StyledText className="color-zinc-800">'zinc-800'</StyledText>
      <StyledText className="color-zinc-900">'zinc-900'</StyledText>
      <StyledText className="color-zinc-950">'zinc-950'</StyledText>
      <StyledText className="color-stone-50">'stone-50'</StyledText>
      <StyledText className="color-stone-100">'stone-100'</StyledText>
      <StyledText className="color-stone-200">'stone-200'</StyledText>
      <StyledText className="color-stone-300">'stone-300'</StyledText>
      <StyledText className="color-stone-400">'stone-400'</StyledText>
      <StyledText className="color-stone-500">'stone-500'</StyledText>
      <StyledText className="color-stone-600">'stone-600'</StyledText>
      <StyledText className="color-stone-700">'stone-700'</StyledText>
      <StyledText className="color-stone-800">'stone-800'</StyledText>
      <StyledText className="color-stone-900">'stone-900'</StyledText>
      <StyledText className="color-stone-950">'stone-950'</StyledText>
      <StyledText className="color-red-50">'red-50'</StyledText>
      <StyledText className="color-red-100">'red-100'</StyledText>
      <StyledText className="color-red-200">'red-200'</StyledText>
      <StyledText className="color-red-300">'red-300'</StyledText>
      <StyledText className="color-red-400">'red-400'</StyledText>
      <StyledText className="color-red-500">'red-500'</StyledText>
      <StyledText className="color-red-600">'red-600'</StyledText>
      <StyledText className="color-red-700">'red-700'</StyledText>
      <StyledText className="color-red-800">'red-800'</StyledText>
      <StyledText className="color-red-900">'red-900'</StyledText>
      <StyledText className="color-red-950">'red-950'</StyledText>
      <StyledText className="color-orange-50">'orange-50'</StyledText>
      <StyledText className="color-orange-100">'orange-100'</StyledText>
      <StyledText className="color-orange-200">'orange-200'</StyledText>
      <StyledText className="color-orange-300">'orange-300'</StyledText>
      <StyledText className="color-orange-400">'orange-400'</StyledText>
      <StyledText className="color-orange-500">'orange-500'</StyledText>
      <StyledText className="color-orange-600">'orange-600'</StyledText>
      <StyledText className="color-orange-700">'orange-700'</StyledText>
      <StyledText className="color-orange-800">'orange-800'</StyledText>
      <StyledText className="color-orange-900">'orange-900'</StyledText>
      <StyledText className="color-orange-950">'orange-950'</StyledText>
      <StyledText className="color-amber-50">'amber-50'</StyledText>
      <StyledText className="color-amber-100">'amber-100'</StyledText>
      <StyledText className="color-amber-200">'amber-200'</StyledText>
      <StyledText className="color-amber-300">'amber-300'</StyledText>
      <StyledText className="color-amber-400">'amber-400'</StyledText>
      <StyledText className="color-amber-500">'amber-500'</StyledText>
      <StyledText className="color-amber-600">'amber-600'</StyledText>
      <StyledText className="color-amber-700">'amber-700'</StyledText>
      <StyledText className="color-amber-800">'amber-800'</StyledText>
      <StyledText className="color-amber-900">'amber-900'</StyledText>
      <StyledText className="color-amber-950">'amber-950'</StyledText>
      <StyledText className="color-yellow-50">'yellow-50'</StyledText>
      <StyledText className="color-yellow-100">'yellow-100'</StyledText>
      <StyledText className="color-yellow-200">'yellow-200'</StyledText>
      <StyledText className="color-yellow-300">'yellow-300'</StyledText>
      <StyledText className="color-yellow-400">'yellow-400'</StyledText>
      <StyledText className="color-yellow-500">'yellow-500'</StyledText>
      <StyledText className="color-yellow-600">'yellow-600'</StyledText>
      <StyledText className="color-yellow-700">'yellow-700'</StyledText>
      <StyledText className="color-yellow-800">'yellow-800'</StyledText>
      <StyledText className="color-yellow-900">'yellow-900'</StyledText>
      <StyledText className="color-yellow-950">'yellow-950'</StyledText>
      <StyledText className="color-lime-50">'lime-50'</StyledText>
      <StyledText className="color-lime-100">'lime-100'</StyledText>
      <StyledText className="color-lime-200">'lime-200'</StyledText>
      <StyledText className="color-lime-300">'lime-300'</StyledText>
      <StyledText className="color-lime-400">'lime-400'</StyledText>
      <StyledText className="color-lime-500">'lime-500'</StyledText>
      <StyledText className="color-lime-600">'lime-600'</StyledText>
      <StyledText className="color-lime-700">'lime-700'</StyledText>
      <StyledText className="color-lime-800">'lime-800'</StyledText>
      <StyledText className="color-lime-900">'lime-900'</StyledText>
      <StyledText className="color-lime-950">'lime-950'</StyledText>
      <StyledText className="color-green-50">'green-50'</StyledText>
      <StyledText className="color-green-100">'green-100'</StyledText>
      <StyledText className="color-green-200">'green-200'</StyledText>
      <StyledText className="color-green-300">'green-300'</StyledText>
      <StyledText className="color-green-400">'green-400'</StyledText>
      <StyledText className="color-green-500">'green-500'</StyledText>
      <StyledText className="color-green-600">'green-600'</StyledText>
      <StyledText className="color-green-700">'green-700'</StyledText>
      <StyledText className="color-green-800">'green-800'</StyledText>
      <StyledText className="color-green-900">'green-900'</StyledText>
      <StyledText className="color-green-950">'green-950'</StyledText>
      <StyledText className="color-emerald-50">'emerald-50'</StyledText>
      <StyledText className="color-emerald-100">'emerald-100'</StyledText>
      <StyledText className="color-emerald-200">'emerald-200'</StyledText>
      <StyledText className="color-emerald-300">'emerald-300'</StyledText>
      <StyledText className="color-emerald-400">'emerald-400'</StyledText>
      <StyledText className="color-emerald-500">'emerald-500'</StyledText>
      <StyledText className="color-emerald-600">'emerald-600'</StyledText>
      <StyledText className="color-emerald-700">'emerald-700'</StyledText>
      <StyledText className="color-emerald-800">'emerald-800'</StyledText>
      <StyledText className="color-emerald-900">'emerald-900'</StyledText>
      <StyledText className="color-emerald-950">'emerald-950'</StyledText>
      <StyledText className="color-teal-50">'teal-50'</StyledText>
      <StyledText className="color-teal-100">'teal-100'</StyledText>
      <StyledText className="color-teal-200">'teal-200'</StyledText>
      <StyledText className="color-teal-300">'teal-300'</StyledText>
      <StyledText className="color-teal-400">'teal-400'</StyledText>
      <StyledText className="color-teal-500">'teal-500'</StyledText>
      <StyledText className="color-teal-600">'teal-600'</StyledText>
      <StyledText className="color-teal-700">'teal-700'</StyledText>
      <StyledText className="color-teal-800">'teal-800'</StyledText>
      <StyledText className="color-teal-900">'teal-900'</StyledText>
      <StyledText className="color-teal-950">'teal-950'</StyledText>
      <StyledText className="color-cyan-50">'cyan-50'</StyledText>
      <StyledText className="color-cyan-100">'cyan-100'</StyledText>
      <StyledText className="color-cyan-200">'cyan-200'</StyledText>
      <StyledText className="color-cyan-300">'cyan-300'</StyledText>
      <StyledText className="color-cyan-400">'cyan-400'</StyledText>
      <StyledText className="color-cyan-500">'cyan-500'</StyledText>
      <StyledText className="color-cyan-600">'cyan-600'</StyledText>
      <StyledText className="color-cyan-700">'cyan-700'</StyledText>
      <StyledText className="color-cyan-800">'cyan-800'</StyledText>
      <StyledText className="color-cyan-900">'cyan-900'</StyledText>
      <StyledText className="color-cyan-950">'cyan-950'</StyledText>
      <StyledText className="color-sky-50">'sky-50'</StyledText>
      <StyledText className="color-sky-100">'sky-100'</StyledText>
      <StyledText className="color-sky-200">'sky-200'</StyledText>
      <StyledText className="color-sky-300">'sky-300'</StyledText>
      <StyledText className="color-sky-400">'sky-400'</StyledText>
      <StyledText className="color-sky-500">'sky-500'</StyledText>
      <StyledText className="color-sky-600">'sky-600'</StyledText>
      <StyledText className="color-sky-700">'sky-700'</StyledText>
      <StyledText className="color-sky-800">'sky-800'</StyledText>
      <StyledText className="color-sky-900">'sky-900'</StyledText>
      <StyledText className="color-sky-950">'sky-950'</StyledText>
      <StyledText className="color-blue-50">'blue-50'</StyledText>
      <StyledText className="color-blue-100">'blue-100'</StyledText>
      <StyledText className="color-blue-200">'blue-200'</StyledText>
      <StyledText className="color-blue-300">'blue-300'</StyledText>
      <StyledText className="color-blue-400">'blue-400'</StyledText>
      <StyledText className="color-blue-500">'blue-500'</StyledText>
      <StyledText className="color-blue-600">'blue-600'</StyledText>
      <StyledText className="color-blue-700">'blue-700'</StyledText>
      <StyledText className="color-blue-800">'blue-800'</StyledText>
      <StyledText className="color-blue-900">'blue-900'</StyledText>
      <StyledText className="color-blue-950">'blue-950'</StyledText>
      <StyledText className="color-indigo-50">'indigo-50'</StyledText>
      <StyledText className="color-indigo-100">'indigo-100'</StyledText>
      <StyledText className="color-indigo-200">'indigo-200'</StyledText>
      <StyledText className="color-indigo-300">'indigo-300'</StyledText>
      <StyledText className="color-indigo-400">'indigo-400'</StyledText>
      <StyledText className="color-indigo-500">'indigo-500'</StyledText>
      <StyledText className="color-indigo-600">'indigo-600'</StyledText>
      <StyledText className="color-indigo-700">'indigo-700'</StyledText>
      <StyledText className="color-indigo-800">'indigo-800'</StyledText>
      <StyledText className="color-indigo-900">'indigo-900'</StyledText>
      <StyledText className="color-indigo-950">'indigo-950'</StyledText>
      <StyledText className="color-violet-50">'violet-50'</StyledText>
      <StyledText className="color-violet-100">'violet-100'</StyledText>
      <StyledText className="color-violet-200">'violet-200'</StyledText>
      <StyledText className="color-violet-300">'violet-300'</StyledText>
      <StyledText className="color-violet-400">'violet-400'</StyledText>
      <StyledText className="color-violet-500">'violet-500'</StyledText>
      <StyledText className="color-violet-600">'violet-600'</StyledText>
      <StyledText className="color-violet-700">'violet-700'</StyledText>
      <StyledText className="color-violet-800">'violet-800'</StyledText>
      <StyledText className="color-violet-900">'violet-900'</StyledText>
      <StyledText className="color-violet-950">'violet-950'</StyledText>
      <StyledText className="color-purple-50">'purple-50'</StyledText>
      <StyledText className="color-purple-100">'purple-100'</StyledText>
      <StyledText className="color-purple-200">'purple-200'</StyledText>
      <StyledText className="color-purple-300">'purple-300'</StyledText>
      <StyledText className="color-purple-400">'purple-400'</StyledText>
      <StyledText className="color-purple-500">'purple-500'</StyledText>
      <StyledText className="color-purple-600">'purple-600'</StyledText>
      <StyledText className="color-purple-700">'purple-700'</StyledText>
      <StyledText className="color-purple-800">'purple-800'</StyledText>
      <StyledText className="color-purple-900">'purple-900'</StyledText>
      <StyledText className="color-purple-950">'purple-950'</StyledText>
      <StyledText className="color-fuschia-50">'fuschia-50'</StyledText>
      <StyledText className="color-fuschia-100">'fuschia-100'</StyledText>
      <StyledText className="color-fuschia-200">'fuschia-200'</StyledText>
      <StyledText className="color-fuschia-300">'fuschia-300'</StyledText>
      <StyledText className="color-fuschia-400">'fuschia-400'</StyledText>
      <StyledText className="color-fuschia-500">'fuschia-500'</StyledText>
      <StyledText className="color-fuschia-600">'fuschia-600'</StyledText>
      <StyledText className="color-fuschia-700">'fuschia-700'</StyledText>
      <StyledText className="color-fuschia-800">'fuschia-800'</StyledText>
      <StyledText className="color-fuschia-900">'fuschia-900'</StyledText>
      <StyledText className="color-fuschia-950">'fuschia-950'</StyledText>
      <StyledText className="color-pink-50">'pink-50'</StyledText>
      <StyledText className="color-pink-100">'pink-100'</StyledText>
      <StyledText className="color-pink-200">'pink-200'</StyledText>
      <StyledText className="color-pink-300">'pink-300'</StyledText>
      <StyledText className="color-pink-400">'pink-400'</StyledText>
      <StyledText className="color-pink-500">'pink-500'</StyledText>
      <StyledText className="color-pink-600">'pink-600'</StyledText>
      <StyledText className="color-pink-700">'pink-700'</StyledText>
      <StyledText className="color-pink-800">'pink-800'</StyledText>
      <StyledText className="color-pink-900">'pink-900'</StyledText>
      <StyledText className="color-pink-950">'pink-950'</StyledText>
      <StyledText className="color-rose-50">'rose-50'</StyledText>
      <StyledText className="color-rose-100">'rose-100'</StyledText>
      <StyledText className="color-rose-200">'rose-200'</StyledText>
      <StyledText className="color-rose-300">'rose-300'</StyledText>
      <StyledText className="color-rose-400">'rose-400'</StyledText>
      <StyledText className="color-rose-500">'rose-500'</StyledText>
      <StyledText className="color-rose-600">'rose-600'</StyledText>
      <StyledText className="color-rose-700">'rose-700'</StyledText>
      <StyledText className="color-rose-800">'rose-800'</StyledText>
      <StyledText className="color-rose-900">'rose-900'</StyledText>
      <StyledText className="color-rose-950">'rose-950'</StyledText>
      <StyledText className="color-lightBlue-50">'lightBlue-50'</StyledText>
      <StyledText className="color-lightBlue-100">'lightBlue-100'</StyledText>
      <StyledText className="color-lightBlue-200">'lightBlue-200'</StyledText>
      <StyledText className="color-lightBlue-300">'lightBlue-300'</StyledText>
      <StyledText className="color-lightBlue-400">'lightBlue-400'</StyledText>
      <StyledText className="color-lightBlue-500">'lightBlue-500'</StyledText>
      <StyledText className="color-lightBlue-600">'lightBlue-600'</StyledText>
      <StyledText className="color-lightBlue-700">'lightBlue-700'</StyledText>
      <StyledText className="color-lightBlue-800">'lightBlue-800'</StyledText>
      <StyledText className="color-lightBlue-900">'lightBlue-900'</StyledText>
      <StyledText className="color-lightBlue-950">'lightBlue-950'</StyledText>
      <StyledText className="color-warmGray-50">'warmGray-50'</StyledText>
      <StyledText className="color-warmGray-100">'warmGray-100'</StyledText>
      <StyledText className="color-warmGray-200">'warmGray-200'</StyledText>
      <StyledText className="color-warmGray-300">'warmGray-300'</StyledText>
      <StyledText className="color-warmGray-400">'warmGray-400'</StyledText>
      <StyledText className="color-warmGray-500">'warmGray-500'</StyledText>
      <StyledText className="color-warmGray-600">'warmGray-600'</StyledText>
      <StyledText className="color-warmGray-700">'warmGray-700'</StyledText>
      <StyledText className="color-warmGray-800">'warmGray-800'</StyledText>
      <StyledText className="color-warmGray-900">'warmGray-900'</StyledText>
      <StyledText className="color-warmGray-950">'warmGray-950'</StyledText>
      <StyledText className="color-trueGray-50">'trueGray-50'</StyledText>
      <StyledText className="color-trueGray-100">'trueGray-100'</StyledText>
      <StyledText className="color-trueGray-200">'trueGray-200'</StyledText>
      <StyledText className="color-trueGray-300">'trueGray-300'</StyledText>
      <StyledText className="color-trueGray-400">'trueGray-400'</StyledText>
      <StyledText className="color-trueGray-500">'trueGray-500'</StyledText>
      <StyledText className="color-trueGray-600">'trueGray-600'</StyledText>
      <StyledText className="color-trueGray-700">'trueGray-700'</StyledText>
      <StyledText className="color-trueGray-800">'trueGray-800'</StyledText>
      <StyledText className="color-trueGray-900">'trueGray-900'</StyledText>
      <StyledText className="color-trueGray-950">'trueGray-950'</StyledText>
      <StyledText className="color-coolGray-50">'coolGray-50'</StyledText>
      <StyledText className="color-coolGray-100">'coolGray-100'</StyledText>
      <StyledText className="color-coolGray-200">'coolGray-200'</StyledText>
      <StyledText className="color-coolGray-300">'coolGray-300'</StyledText>
      <StyledText className="color-coolGray-400">'coolGray-400'</StyledText>
      <StyledText className="color-coolGray-500">'coolGray-500'</StyledText>
      <StyledText className="color-coolGray-600">'coolGray-600'</StyledText>
      <StyledText className="color-coolGray-700">'coolGray-700'</StyledText>
      <StyledText className="color-coolGray-800">'coolGray-800'</StyledText>
      <StyledText className="color-coolGray-900">'coolGray-900'</StyledText>
      <StyledText className="color-coolGray-950">'coolGray-950'</StyledText>
      <StyledText className="color-blueGray-50">'blueGray-50'</StyledText>
      <StyledText className="color-blueGray-100">'blueGray-100'</StyledText>
      <StyledText className="color-blueGray-200">'blueGray-200'</StyledText>
      <StyledText className="color-blueGray-300">'blueGray-300'</StyledText>
      <StyledText className="color-blueGray-400">'blueGray-400'</StyledText>
      <StyledText className="color-blueGray-500">'blueGray-500'</StyledText>
      <StyledText className="color-blueGray-600">'blueGray-600'</StyledText>
      <StyledText className="color-blueGray-700">'blueGray-700'</StyledText>
      <StyledText className="color-blueGray-800">'blueGray-800'</StyledText>
      <StyledText className="color-blueGray-900">'blueGray-900'</StyledText>
      <StyledText className="color-blueGray-950">'blueGray-950'</StyledText> */}

      {/* <StyledText className="bg-white"></StyledText>
      <StyledText className="bg-black"></StyledText>
      <StyledText className="bg-transparent"></StyledText>
      <StyledText className="bg-inherit"></StyledText>
      <StyledText className="bg-current"></StyledText> */}

      {colors.map((color) => {
        return tones.map((tone) => {
          return (
            <StyledText className={'bg-' + color + '-' + tone}>
              {"<StyledText className='" +
                'bg-' +
                color +
                '-' +
                tone +
                "'>'" +
                color +
                '-' +
                tone +
                "'</StyledText>"}
            </StyledText>
          );
        });
      })}

      {/* <StyledText className="bg-slate-50">'slate-50'</StyledText>
      <StyledText className="bg-slate-100">'slate-100'</StyledText>
      <StyledText className="bg-slate-200">'slate-200'</StyledText>
      <StyledText className="bg-slate-300">'slate-300'</StyledText>
      <StyledText className="bg-slate-400">'slate-400'</StyledText>
      <StyledText className="bg-slate-500">'slate-500'</StyledText>
      <StyledText className="bg-slate-600">'slate-600'</StyledText>
      <StyledText className="bg-slate-700">'slate-700'</StyledText>
      <StyledText className="bg-slate-800">'slate-800'</StyledText>
      <StyledText className="bg-slate-900">'slate-900'</StyledText>
      <StyledText className="bg-slate-950">'slate-950'</StyledText>
      <StyledText className="bg-gray-50">'gray-50'</StyledText>
      <StyledText className="bg-gray-100">'gray-100'</StyledText>
      <StyledText className="bg-gray-200">'gray-200'</StyledText>
      <StyledText className="bg-gray-300">'gray-300'</StyledText>
      <StyledText className="bg-gray-400">'gray-400'</StyledText>
      <StyledText className="bg-gray-500">'gray-500'</StyledText>
      <StyledText className="bg-gray-600">'gray-600'</StyledText>
      <StyledText className="bg-gray-700">'gray-700'</StyledText>
      <StyledText className="bg-gray-800">'gray-800'</StyledText>
      <StyledText className="bg-gray-900">'gray-900'</StyledText>
      <StyledText className="bg-gray-950">'gray-950'</StyledText>
      <StyledText className="bg-neutral-50">'neutral-50'</StyledText>
      <StyledText className="bg-neutral-100">'neutral-100'</StyledText>
      <StyledText className="bg-neutral-200">'neutral-200'</StyledText>
      <StyledText className="bg-neutral-300">'neutral-300'</StyledText>
      <StyledText className="bg-neutral-400">'neutral-400'</StyledText>
      <StyledText className="bg-neutral-500">'neutral-500'</StyledText>
      <StyledText className="bg-neutral-600">'neutral-600'</StyledText>
      <StyledText className="bg-neutral-700">'neutral-700'</StyledText>
      <StyledText className="bg-neutral-800">'neutral-800'</StyledText>
      <StyledText className="bg-neutral-900">'neutral-900'</StyledText>
      <StyledText className="bg-neutral-950">'neutral-950'</StyledText>
      <StyledText className="bg-zinc-50">'zinc-50'</StyledText>
      <StyledText className="bg-zinc-100">'zinc-100'</StyledText>
      <StyledText className="bg-zinc-200">'zinc-200'</StyledText>
      <StyledText className="bg-zinc-300">'zinc-300'</StyledText>
      <StyledText className="bg-zinc-400">'zinc-400'</StyledText>
      <StyledText className="bg-zinc-500">'zinc-500'</StyledText>
      <StyledText className="bg-zinc-600">'zinc-600'</StyledText>
      <StyledText className="bg-zinc-700">'zinc-700'</StyledText>
      <StyledText className="bg-zinc-800">'zinc-800'</StyledText>
      <StyledText className="bg-zinc-900">'zinc-900'</StyledText>
      <StyledText className="bg-zinc-950">'zinc-950'</StyledText>
      <StyledText className="bg-stone-50">'stone-50'</StyledText>
      <StyledText className="bg-stone-100">'stone-100'</StyledText>
      <StyledText className="bg-stone-200">'stone-200'</StyledText>
      <StyledText className="bg-stone-300">'stone-300'</StyledText>
      <StyledText className="bg-stone-400">'stone-400'</StyledText>
      <StyledText className="bg-stone-500">'stone-500'</StyledText>
      <StyledText className="bg-stone-600">'stone-600'</StyledText>
      <StyledText className="bg-stone-700">'stone-700'</StyledText>
      <StyledText className="bg-stone-800">'stone-800'</StyledText>
      <StyledText className="bg-stone-900">'stone-900'</StyledText>
      <StyledText className="bg-stone-950">'stone-950'</StyledText>
      <StyledText className="bg-red-50">'red-50'</StyledText>
      <StyledText className="bg-red-100">'red-100'</StyledText>
      <StyledText className="bg-red-200">'red-200'</StyledText>
      <StyledText className="bg-red-300">'red-300'</StyledText>
      <StyledText className="bg-red-400">'red-400'</StyledText>
      <StyledText className="bg-red-500">'red-500'</StyledText>
      <StyledText className="bg-red-600">'red-600'</StyledText>
      <StyledText className="bg-red-700">'red-700'</StyledText>
      <StyledText className="bg-red-800">'red-800'</StyledText>
      <StyledText className="bg-red-900">'red-900'</StyledText>
      <StyledText className="bg-red-950">'red-950'</StyledText>
      <StyledText className="bg-orange-50">'orange-50'</StyledText>
      <StyledText className="bg-orange-100">'orange-100'</StyledText>
      <StyledText className="bg-orange-200">'orange-200'</StyledText>
      <StyledText className="bg-orange-300">'orange-300'</StyledText>
      <StyledText className="bg-orange-400">'orange-400'</StyledText>
      <StyledText className="bg-orange-500">'orange-500'</StyledText>
      <StyledText className="bg-orange-600">'orange-600'</StyledText>
      <StyledText className="bg-orange-700">'orange-700'</StyledText>
      <StyledText className="bg-orange-800">'orange-800'</StyledText>
      <StyledText className="bg-orange-900">'orange-900'</StyledText>
      <StyledText className="bg-orange-950">'orange-950'</StyledText>
      <StyledText className="bg-amber-50">'amber-50'</StyledText>
      <StyledText className="bg-amber-100">'amber-100'</StyledText>
      <StyledText className="bg-amber-200">'amber-200'</StyledText>
      <StyledText className="bg-amber-300">'amber-300'</StyledText>
      <StyledText className="bg-amber-400">'amber-400'</StyledText>
      <StyledText className="bg-amber-500">'amber-500'</StyledText>
      <StyledText className="bg-amber-600">'amber-600'</StyledText>
      <StyledText className="bg-amber-700">'amber-700'</StyledText>
      <StyledText className="bg-amber-800">'amber-800'</StyledText>
      <StyledText className="bg-amber-900">'amber-900'</StyledText>
      <StyledText className="bg-amber-950">'amber-950'</StyledText>
      <StyledText className="bg-yellow-50">'yellow-50'</StyledText>
      <StyledText className="bg-yellow-100">'yellow-100'</StyledText>
      <StyledText className="bg-yellow-200">'yellow-200'</StyledText>
      <StyledText className="bg-yellow-300">'yellow-300'</StyledText>
      <StyledText className="bg-yellow-400">'yellow-400'</StyledText>
      <StyledText className="bg-yellow-500">'yellow-500'</StyledText>
      <StyledText className="bg-yellow-600">'yellow-600'</StyledText>
      <StyledText className="bg-yellow-700">'yellow-700'</StyledText>
      <StyledText className="bg-yellow-800">'yellow-800'</StyledText>
      <StyledText className="bg-yellow-900">'yellow-900'</StyledText>
      <StyledText className="bg-yellow-950">'yellow-950'</StyledText>
      <StyledText className="bg-lime-50">'lime-50'</StyledText>
      <StyledText className="bg-lime-100">'lime-100'</StyledText>
      <StyledText className="bg-lime-200">'lime-200'</StyledText>
      <StyledText className="bg-lime-300">'lime-300'</StyledText>
      <StyledText className="bg-lime-400">'lime-400'</StyledText>
      <StyledText className="bg-lime-500">'lime-500'</StyledText>
      <StyledText className="bg-lime-600">'lime-600'</StyledText>
      <StyledText className="bg-lime-700">'lime-700'</StyledText>
      <StyledText className="bg-lime-800">'lime-800'</StyledText>
      <StyledText className="bg-lime-900">'lime-900'</StyledText>
      <StyledText className="bg-lime-950">'lime-950'</StyledText>
      <StyledText className="bg-green-50">'green-50'</StyledText>
      <StyledText className="bg-green-100">'green-100'</StyledText>
      <StyledText className="bg-green-200">'green-200'</StyledText>
      <StyledText className="bg-green-300">'green-300'</StyledText>
      <StyledText className="bg-green-400">'green-400'</StyledText>
      <StyledText className="bg-green-500">'green-500'</StyledText>
      <StyledText className="bg-green-600">'green-600'</StyledText>
      <StyledText className="bg-green-700">'green-700'</StyledText>
      <StyledText className="bg-green-800">'green-800'</StyledText>
      <StyledText className="bg-green-900">'green-900'</StyledText>
      <StyledText className="bg-green-950">'green-950'</StyledText>
      <StyledText className="bg-emerald-50">'emerald-50'</StyledText>
      <StyledText className="bg-emerald-100">'emerald-100'</StyledText>
      <StyledText className="bg-emerald-200">'emerald-200'</StyledText>
      <StyledText className="bg-emerald-300">'emerald-300'</StyledText>
      <StyledText className="bg-emerald-400">'emerald-400'</StyledText>
      <StyledText className="bg-emerald-500">'emerald-500'</StyledText>
      <StyledText className="bg-emerald-600">'emerald-600'</StyledText>
      <StyledText className="bg-emerald-700">'emerald-700'</StyledText>
      <StyledText className="bg-emerald-800">'emerald-800'</StyledText>
      <StyledText className="bg-emerald-900">'emerald-900'</StyledText>
      <StyledText className="bg-emerald-950">'emerald-950'</StyledText>
      <StyledText className="bg-teal-50">'teal-50'</StyledText>
      <StyledText className="bg-teal-100">'teal-100'</StyledText>
      <StyledText className="bg-teal-200">'teal-200'</StyledText>
      <StyledText className="bg-teal-300">'teal-300'</StyledText>
      <StyledText className="bg-teal-400">'teal-400'</StyledText>
      <StyledText className="bg-teal-500">'teal-500'</StyledText>
      <StyledText className="bg-teal-600">'teal-600'</StyledText>
      <StyledText className="bg-teal-700">'teal-700'</StyledText>
      <StyledText className="bg-teal-800">'teal-800'</StyledText>
      <StyledText className="bg-teal-900">'teal-900'</StyledText>
      <StyledText className="bg-teal-950">'teal-950'</StyledText>
      <StyledText className="bg-cyan-50">'cyan-50'</StyledText>
      <StyledText className="bg-cyan-100">'cyan-100'</StyledText>
      <StyledText className="bg-cyan-200">'cyan-200'</StyledText>
      <StyledText className="bg-cyan-300">'cyan-300'</StyledText>
      <StyledText className="bg-cyan-400">'cyan-400'</StyledText>
      <StyledText className="bg-cyan-500">'cyan-500'</StyledText>
      <StyledText className="bg-cyan-600">'cyan-600'</StyledText>
      <StyledText className="bg-cyan-700">'cyan-700'</StyledText>
      <StyledText className="bg-cyan-800">'cyan-800'</StyledText>
      <StyledText className="bg-cyan-900">'cyan-900'</StyledText>
      <StyledText className="bg-cyan-950">'cyan-950'</StyledText>
      <StyledText className="bg-sky-50">'sky-50'</StyledText>
      <StyledText className="bg-sky-100">'sky-100'</StyledText>
      <StyledText className="bg-sky-200">'sky-200'</StyledText>
      <StyledText className="bg-sky-300">'sky-300'</StyledText>
      <StyledText className="bg-sky-400">'sky-400'</StyledText>
      <StyledText className="bg-sky-500">'sky-500'</StyledText>
      <StyledText className="bg-sky-600">'sky-600'</StyledText>
      <StyledText className="bg-sky-700">'sky-700'</StyledText>
      <StyledText className="bg-sky-800">'sky-800'</StyledText>
      <StyledText className="bg-sky-900">'sky-900'</StyledText>
      <StyledText className="bg-sky-950">'sky-950'</StyledText>
      <StyledText className="bg-blue-50">'blue-50'</StyledText>
      <StyledText className="bg-blue-100">'blue-100'</StyledText>
      <StyledText className="bg-blue-200">'blue-200'</StyledText>
      <StyledText className="bg-blue-300">'blue-300'</StyledText>
      <StyledText className="bg-blue-400">'blue-400'</StyledText>
      <StyledText className="bg-blue-500">'blue-500'</StyledText>
      <StyledText className="bg-blue-600">'blue-600'</StyledText>
      <StyledText className="bg-blue-700">'blue-700'</StyledText>
      <StyledText className="bg-blue-800">'blue-800'</StyledText>
      <StyledText className="bg-blue-900">'blue-900'</StyledText>
      <StyledText className="bg-blue-950">'blue-950'</StyledText>
      <StyledText className="bg-indigo-50">'indigo-50'</StyledText>
      <StyledText className="bg-indigo-100">'indigo-100'</StyledText>
      <StyledText className="bg-indigo-200">'indigo-200'</StyledText>
      <StyledText className="bg-indigo-300">'indigo-300'</StyledText>
      <StyledText className="bg-indigo-400">'indigo-400'</StyledText>
      <StyledText className="bg-indigo-500">'indigo-500'</StyledText>
      <StyledText className="bg-indigo-600">'indigo-600'</StyledText>
      <StyledText className="bg-indigo-700">'indigo-700'</StyledText>
      <StyledText className="bg-indigo-800">'indigo-800'</StyledText>
      <StyledText className="bg-indigo-900">'indigo-900'</StyledText>
      <StyledText className="bg-indigo-950">'indigo-950'</StyledText>
      <StyledText className="bg-violet-50">'violet-50'</StyledText>
      <StyledText className="bg-violet-100">'violet-100'</StyledText>
      <StyledText className="bg-violet-200">'violet-200'</StyledText>
      <StyledText className="bg-violet-300">'violet-300'</StyledText>
      <StyledText className="bg-violet-400">'violet-400'</StyledText>
      <StyledText className="bg-violet-500">'violet-500'</StyledText>
      <StyledText className="bg-violet-600">'violet-600'</StyledText>
      <StyledText className="bg-violet-700">'violet-700'</StyledText>
      <StyledText className="bg-violet-800">'violet-800'</StyledText>
      <StyledText className="bg-violet-900">'violet-900'</StyledText>
      <StyledText className="bg-violet-950">'violet-950'</StyledText>
      <StyledText className="bg-purple-50">'purple-50'</StyledText>
      <StyledText className="bg-purple-100">'purple-100'</StyledText>
      <StyledText className="bg-purple-200">'purple-200'</StyledText>
      <StyledText className="bg-purple-300">'purple-300'</StyledText>
      <StyledText className="bg-purple-400">'purple-400'</StyledText>
      <StyledText className="bg-purple-500">'purple-500'</StyledText>
      <StyledText className="bg-purple-600">'purple-600'</StyledText>
      <StyledText className="bg-purple-700">'purple-700'</StyledText>
      <StyledText className="bg-purple-800">'purple-800'</StyledText>
      <StyledText className="bg-purple-900">'purple-900'</StyledText>
      <StyledText className="bg-purple-950">'purple-950'</StyledText>
      <StyledText className="bg-fuschia-50">'fuschia-50'</StyledText>
      <StyledText className="bg-fuschia-100">'fuschia-100'</StyledText>
      <StyledText className="bg-fuschia-200">'fuschia-200'</StyledText>
      <StyledText className="bg-fuschia-300">'fuschia-300'</StyledText>
      <StyledText className="bg-fuschia-400">'fuschia-400'</StyledText>
      <StyledText className="bg-fuschia-500">'fuschia-500'</StyledText>
      <StyledText className="bg-fuschia-600">'fuschia-600'</StyledText>
      <StyledText className="bg-fuschia-700">'fuschia-700'</StyledText>
      <StyledText className="bg-fuschia-800">'fuschia-800'</StyledText>
      <StyledText className="bg-fuschia-900">'fuschia-900'</StyledText>
      <StyledText className="bg-fuschia-950">'fuschia-950'</StyledText>
      <StyledText className="bg-pink-50">'pink-50'</StyledText>
      <StyledText className="bg-pink-100">'pink-100'</StyledText>
      <StyledText className="bg-pink-200">'pink-200'</StyledText>
      <StyledText className="bg-pink-300">'pink-300'</StyledText>
      <StyledText className="bg-pink-400">'pink-400'</StyledText>
      <StyledText className="bg-pink-500">'pink-500'</StyledText>
      <StyledText className="bg-pink-600">'pink-600'</StyledText>
      <StyledText className="bg-pink-700">'pink-700'</StyledText>
      <StyledText className="bg-pink-800">'pink-800'</StyledText>
      <StyledText className="bg-pink-900">'pink-900'</StyledText>
      <StyledText className="bg-pink-950">'pink-950'</StyledText>
      <StyledText className="bg-rose-50">'rose-50'</StyledText>
      <StyledText className="bg-rose-100">'rose-100'</StyledText>
      <StyledText className="bg-rose-200">'rose-200'</StyledText>
      <StyledText className="bg-rose-300">'rose-300'</StyledText>
      <StyledText className="bg-rose-400">'rose-400'</StyledText>
      <StyledText className="bg-rose-500">'rose-500'</StyledText>
      <StyledText className="bg-rose-600">'rose-600'</StyledText>
      <StyledText className="bg-rose-700">'rose-700'</StyledText>
      <StyledText className="bg-rose-800">'rose-800'</StyledText>
      <StyledText className="bg-rose-900">'rose-900'</StyledText>
      <StyledText className="bg-rose-950">'rose-950'</StyledText>
      <StyledText className="bg-lightBlue-50">'lightBlue-50'</StyledText>
      <StyledText className="bg-lightBlue-100">'lightBlue-100'</StyledText>
      <StyledText className="bg-lightBlue-200">'lightBlue-200'</StyledText>
      <StyledText className="bg-lightBlue-300">'lightBlue-300'</StyledText>
      <StyledText className="bg-lightBlue-400">'lightBlue-400'</StyledText>
      <StyledText className="bg-lightBlue-500">'lightBlue-500'</StyledText>
      <StyledText className="bg-lightBlue-600">'lightBlue-600'</StyledText>
      <StyledText className="bg-lightBlue-700">'lightBlue-700'</StyledText>
      <StyledText className="bg-lightBlue-800">'lightBlue-800'</StyledText>
      <StyledText className="bg-lightBlue-900">'lightBlue-900'</StyledText>
      <StyledText className="bg-lightBlue-950">'lightBlue-950'</StyledText>
      <StyledText className="bg-warmGray-50">'warmGray-50'</StyledText>
      <StyledText className="bg-warmGray-100">'warmGray-100'</StyledText>
      <StyledText className="bg-warmGray-200">'warmGray-200'</StyledText>
      <StyledText className="bg-warmGray-300">'warmGray-300'</StyledText>
      <StyledText className="bg-warmGray-400">'warmGray-400'</StyledText>
      <StyledText className="bg-warmGray-500">'warmGray-500'</StyledText>
      <StyledText className="bg-warmGray-600">'warmGray-600'</StyledText>
      <StyledText className="bg-warmGray-700">'warmGray-700'</StyledText>
      <StyledText className="bg-warmGray-800">'warmGray-800'</StyledText>
      <StyledText className="bg-warmGray-900">'warmGray-900'</StyledText>
      <StyledText className="bg-warmGray-950">'warmGray-950'</StyledText>
      <StyledText className="bg-trueGray-50">'trueGray-50'</StyledText>
      <StyledText className="bg-trueGray-100">'trueGray-100'</StyledText>
      <StyledText className="bg-trueGray-200">'trueGray-200'</StyledText>
      <StyledText className="bg-trueGray-300">'trueGray-300'</StyledText>
      <StyledText className="bg-trueGray-400">'trueGray-400'</StyledText>
      <StyledText className="bg-trueGray-500">'trueGray-500'</StyledText>
      <StyledText className="bg-trueGray-600">'trueGray-600'</StyledText>
      <StyledText className="bg-trueGray-700">'trueGray-700'</StyledText>
      <StyledText className="bg-trueGray-800">'trueGray-800'</StyledText>
      <StyledText className="bg-trueGray-900">'trueGray-900'</StyledText>
      <StyledText className="bg-trueGray-950">'trueGray-950'</StyledText>
      <StyledText className="bg-coolGray-50">'coolGray-50'</StyledText>
      <StyledText className="bg-coolGray-100">'coolGray-100'</StyledText>
      <StyledText className="bg-coolGray-200">'coolGray-200'</StyledText>
      <StyledText className="bg-coolGray-300">'coolGray-300'</StyledText>
      <StyledText className="bg-coolGray-400">'coolGray-400'</StyledText>
      <StyledText className="bg-coolGray-500">'coolGray-500'</StyledText>
      <StyledText className="bg-coolGray-600">'coolGray-600'</StyledText>
      <StyledText className="bg-coolGray-700">'coolGray-700'</StyledText>
      <StyledText className="bg-coolGray-800">'coolGray-800'</StyledText>
      <StyledText className="bg-coolGray-900">'coolGray-900'</StyledText>
      <StyledText className="bg-coolGray-950">'coolGray-950'</StyledText>
      <StyledText className="bg-blueGray-50">'blueGray-50'</StyledText>
      <StyledText className="bg-blueGray-100">'blueGray-100'</StyledText>
      <StyledText className="bg-blueGray-200">'blueGray-200'</StyledText>
      <StyledText className="bg-blueGray-300">'blueGray-300'</StyledText>
      <StyledText className="bg-blueGray-400">'blueGray-400'</StyledText>
      <StyledText className="bg-blueGray-500">'blueGray-500'</StyledText>
      <StyledText className="bg-blueGray-600">'blueGray-600'</StyledText>
      <StyledText className="bg-blueGray-700">'blueGray-700'</StyledText>
      <StyledText className="bg-blueGray-800">'blueGray-800'</StyledText>
      <StyledText className="bg-blueGray-900">'blueGray-900'</StyledText>
      <StyledText className="bg-blueGray-950">'blueGray-950'</StyledText> */}
    </StyledView>
  );
};

export = Home;
