import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function DrawerContent(props: DrawerContentComponentProps) {
  const dummyItems = [
    { id: '1', title: '會員中心', icon: 'person-outline' },
    { id: '2', title: '我的訂單', icon: 'receipt-outline' },
    { id: '3', title: '分店搜尋', icon: 'location-outline' },
    { id: '4', title: '最新消息', icon: 'newspaper-outline' },
    { id: '5', title: '常見問題', icon: 'help-circle-outline' },
    { id: '6', title: '聯絡我們', icon: 'chatbubble-ellipses-outline' },
    { id: '7', title: '設定', icon: 'settings-outline' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>更多選項</Text>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Ionicons name="close" size={28} color="#000033" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {dummyItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.itemRow} onPress={() => {}}>
            <Ionicons name={item.icon as any} size={24} color="#000033" />
            <Text style={styles.itemText}>{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" style={styles.arrowIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000033' },
  content: { flex: 1 },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  itemText: { flex: 1, fontSize: 16, marginLeft: 15, color: '#333' },
  arrowIcon: { marginLeft: 'auto' }
});
