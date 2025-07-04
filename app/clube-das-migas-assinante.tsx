import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ClubeDasMigasAssinanteScreen() {
  const handleGoBack = () => {
    router.back();
  };

  const handleManageSubscription = () => {
    // Navigate to manage subscription
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with Background Image */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }}
          style={styles.headerBackground}
          imageStyle={styles.headerBackgroundImage}
        >
          <View style={styles.headerOverlay}>
            {/* Status Bar */}
            <View style={styles.statusBar}>
              <Text style={styles.timeText}>9:41</Text>
              <View style={styles.statusIcons}>
                <View style={styles.signalBars}>
                  <View style={[styles.bar, styles.bar1]} />
                  <View style={[styles.bar, styles.bar2]} />
                  <View style={[styles.bar, styles.bar3]} />
                  <View style={[styles.bar, styles.bar4]} />
                </View>
                <Text style={styles.wifiText}>📶</Text>
                <View style={styles.batteryContainer}>
                  <View style={styles.battery}>
                    <View style={styles.batteryFill} />
                  </View>
                </View>
              </View>
            </View>

            {/* Navigation Header */}
            <View style={styles.navigationHeader}>
              <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <ArrowLeft size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Clube das migas</Text>
              <View style={styles.placeholder} />
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
              <Text style={styles.mainTitle}>Que bom ter você no clube premium de migas!</Text>
              <Text style={styles.subtitle}>Você é assinante desde 26 de 2023</Text>
              
              <TouchableOpacity style={styles.manageButton} onPress={handleManageSubscription}>
                <Text style={styles.manageText}>Gerenciar assinatura</Text>
                <ChevronRight size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Premium Benefits Section */}
        <View style={styles.premiumSection}>
          <Text style={styles.premiumTitle}>Assinatura Premium</Text>
          
          <View style={styles.benefitsGrid}>
            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <View style={styles.iconPlaceholder} />
              </View>
              <Text style={styles.benefitTitle}>Seus benefícios</Text>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <View style={styles.iconPlaceholder} />
              </View>
              <Text style={styles.benefitTitle}>Histórico de pontos</Text>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <View style={styles.iconPlaceholder} />
              </View>
              <Text style={styles.benefitTitle}>Ganhe pontos extras</Text>
            </View>

            <View style={styles.benefitItem}>
              <View style={styles.benefitIcon}>
                <View style={styles.iconPlaceholder} />
              </View>
              <Text style={styles.benefitTitle}>Níveis de miga</Text>
            </View>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Dúvidas frequentes</Text>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>O que é o Clube das migas?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Como ganho pontos?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quais são os benefícios?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quanto tempo vale a pontuação?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Por que minha categoria caiu?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quanto tempo leva para os pontos ou última compra serem atualizados?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Como funciona um caso de troca e devolução?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quais são os níveis do clube?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quais são os benefícios de cada nível?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Quais são os benefícios de cada nível?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.faqItem, { borderBottomWidth: 0 }]}>
            <Text style={styles.faqQuestion}>Quais são os níveis do clube?</Text>
            <ChevronRight size={16} color="#CCCCCC" />
          </TouchableOpacity>
        </View>

        {/* Bottom Indicator */}
        <View style={styles.bottomIndicator}>
          <View style={styles.homeIndicator} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  headerBackground: {
    height: 300,
    width: '100%',
  },
  headerBackgroundImage: {
    resizeMode: 'cover',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(139, 69, 19, 0.8)',
    paddingHorizontal: 20,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  bar1: {
    width: 3,
    height: 4,
  },
  bar2: {
    width: 3,
    height: 6,
  },
  bar3: {
    width: 3,
    height: 8,
  },
  bar4: {
    width: 3,
    height: 10,
  },
  wifiText: {
    fontSize: 15,
    marginLeft: 2,
  },
  batteryContainer: {
    marginLeft: 2,
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  batteryFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  navigationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  placeholder: {
    width: 34,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 26,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 25,
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  manageText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  premiumSection: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 20,
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  benefitItem: {
    width: (width - 55) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    minHeight: 100,
  },
  benefitIcon: {
    marginBottom: 12,
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
  },
  benefitTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 18,
  },
  faqSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  faqQuestion: {
    fontSize: 15,
    color: '#000000',
    flex: 1,
    lineHeight: 20,
  },
  bottomIndicator: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 3,
  },
});