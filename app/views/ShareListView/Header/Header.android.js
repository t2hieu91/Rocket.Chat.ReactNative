import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import TextInput from '../../../utils/textInput';
import I18n from '../../../i18n';
import { themes } from '../../../constants/colors';
import sharedStyles from '../../Styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	search: {
		fontSize: 20,
		...sharedStyles.textRegular,
		marginHorizontal: 14
	},
	title: {
		fontSize: 20,
		...sharedStyles.textBold,
		marginHorizontal: 16
	}
});

const Header = React.memo(({ searching, onChangeSearchText, theme }) => {
	if (searching) {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.search}
					placeholder={I18n.t('Search')}
					onChangeText={onChangeSearchText}
					theme={theme}
					autoFocus
				/>
			</View>
		);
	}
	return <Text style={[styles.title, { color: themes[theme].titleText }]}>{I18n.t('Send_to')}</Text>;
});

Header.propTypes = {
	searching: PropTypes.bool,
	onChangeSearchText: PropTypes.func,
	theme: PropTypes.string
};

export default Header;
