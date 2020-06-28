import React, {useState} from 'react';
import {Box, Text} from 'components';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useI18n} from '@shopify/react-i18n';
import {Region} from 'shared/Region';

import {regionData, RegionItem, regionStyles} from './RegionPickerShared';

export const RegionPickerScreen = () => {
  const [i18n] = useI18n();
  //const {setRegion: persistRegion} = useStorage();
  const [selectedRegion, setSelectedRegion] = useState<Region>('None');
  //const navigation = useNavigation();
  //const {setOnboarded} = useStorage();

  return (
    <Box justifyContent={'flex-start'} backgroundColor="overlayBackground">
      <SafeAreaView style={regionStyles.flex}>
        <ScrollView style={regionStyles.flex}>
          <Box flex={1} paddingHorizontal="m">
            <Text marginBottom="s" variant="bodyTitle" color="overlayBodyText" accessibilityRole="header">
              {i18n.translate('RegionPicker.Title')}
            </Text>
            <Text marginVertical="m" variant="bodyText" color="overlayBodyText">
              {i18n.translate('RegionPicker.Body')}
            </Text>
            <Box
              marginTop="s"
              paddingHorizontal="m"
              borderRadius={10}
              backgroundColor="infoBlockNeutralBackground"
              accessibilityRole="radiogroup"
            >
              {regionData.map(item => {
                return (
                  <RegionItem
                    key={item.code}
                    selected={selectedRegion === item.code}
                    onPress={setSelectedRegion}
                    name={i18n.translate(`RegionPicker.${item.code}`)}
                    {...item}
                  />
                );
              })}
            </Box>
          </Box>
        </ScrollView>

        {/*
        <Box
          backgroundColor="overlayBackground"
          padding="m"
          shadowColor="infoBlockNeutralBackground"
          shadowOffset={{width: 0, height: 2}}
          shadowOpacity={0.5}
          shadowRadius={2}
          elevation={10}
        >
          <Button
            text={i18n.translate(`RegionPicker.${selectedRegion === 'None' ? 'Skip' : 'GetStarted'}`)}
            variant={selectedRegion === 'None' ? 'thinFlatNeutralGrey' : 'thinFlat'}
            onPress={async () => {
              await setOnboarded(true);
              await persistRegion(selectedRegion);
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              });
            }}
          />
          </Box> */}
      </SafeAreaView>
    </Box>
  );
};
